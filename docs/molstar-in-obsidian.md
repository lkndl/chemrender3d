# Mol* thinks Obsidian is Node.js

Obsidian's renderer is Electron, so `process.versions.node` is set next to a real
`document`. Mol* decides where it runs with exactly that check, in
`mol-util/nodejs-shims`:

```js
export const RUNNING_IN_NODEJS = typeof process !== 'undefined'
    && process.versions != null && process.versions.node != null;
```

Three modules read it and switch to paths meant for Mol*'s command-line renderer:

- `mol-geo/geometry/text/font-atlas` demands the `canvas` npm module to rasterize
  glyphs, so any Label representation throws. Inside a `.molx` restore that
  aborts the whole snapshot, and the panel renders nothing.
- `mol-util/assets` gets Mol*'s stand-in `File_` class, so `asset.file instanceof
  File_` is false for a real `File` and `resolve()` throws `Cannot resolve file
  asset`.
- `mol-util/data-source` downloads with `fetch` instead of XHR, losing Mol*'s
  progress reporting and abort.

`esbuild.config.mjs` replaces that module at build time with the truth:

```js
export const RUNNING_IN_NODEJS = false;
export const File_ = File;
```

## When Mol* is upgraded

The plugin throws from `onEnd` if its filter stops matching, so a renamed or
moved `nodejs-shims.js` fails the build rather than silently restoring the CLI
paths. A new export that other modules import also fails the build (`No matching
export`), so the shim only needs the two it has today.

Both of those are build-time, but the behaviour is not covered by tests. After an
upgrade, check in the app: labels render, a `.molx` session loads, a PDB or
AlphaFold fetch works, an ordinary vault file embeds.

## Notes

- The thrown error says to call `mol-util/data-source`'s `setCanvasModule`. It is
  in `mol-geo/geometry/text/font-atlas`; `data-source` only has `setFSModule`.
  Grep for the function, not the module the message names.
- `result.errors.push()` inside an esbuild `onEnd` hook is ignored — the build
  exits 0 with no output. Throw instead.
- Confirm the alias landed by grepping the bundle: `versions.node` and
  `File_NodeJs` exist nowhere else, so both should be absent from `main.js`.
