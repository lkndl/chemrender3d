# ChemRender3D

**Bring interactive 3D molecules to Obsidian.**

ChemRender3D brings the [Mol*](https://molstar.org/) molecular viewer directly into your vault. Visualize and explore proteins, crystal structures, and small molecules without leaving your notes.

<img width="800" alt="ChemRender3D demo" src="https://github.com/user-attachments/assets/62d7cec3-1d4e-4330-a980-5836fa31b229" />

## Features

* **Native embeds** — Render `.pdb`, `.cif`, `.mol`, `.sdf`, `.xyz`, and other supported molecular files.
* **SMILES to 3D** — Generate and visualize 3D molecular structures directly from SMILES.
* **Interactive visualization** — Rotate, zoom, and inspect structures inside your notes.
* **Multiple representations** — Explore structures using molecular, ribbon, surface, and illustrative styles.
* **Molecular interactions** — Detect hydrogen bonds, salt bridges, and other non-covalent interactions.
* **Performance controls** — Adjust rendering quality for large molecular structures.



📝 Release Notes

**⚡ (1.0.4)**
- **Extended Chemical & Material Formats:** Directly render solid-state crystal lattices, quantum chemical inputs, and dynamic trajectory files inline.
- **2D Structure Mode:** Toggle between responsive 3D viewports and textbook 2D vector diagrams.
- **Fast 2D Collection Grid:** Folder previews now generate instant vector cards.
- **Click-to-3D Focus Modal:** Click any molecule in the grid gallery to launch a dedicated 3D inspection window.
- **Accurate 2D Skeletal Projection:** Corrected methyl and hydrogen geometry to deliver clean textbook diagrams without triangular artifacts.
  
- Use ```` ```2dmol ```` for any individual molecule, crystal, file, or SMILES:
     ````markdown
     ```2dmol
     c1ccccc1
     ```
     ````
     ````markdown
     ```2dmol
     [[m-Xylene_.mol]]
     ```
     ````
     ````markdown
     ```2dmol
     caffeine
     ```
     
     ````
     
  <img width="720" height="698" alt="image" src="https://github.com/user-attachments/assets/00cbdc18-a215-47cd-a7f1-0c08dfb2d6bc" />


🗂️ **New Feature: Folder Grid Preview** 
Want to see all your molecules at a glance? You can now generate a beautiful, responsive gallery of all 3D molecules in a specific folder. 
Just use this code block:
````markdown
```3dmol-grid
folder: Assets/Molecules
```
````
example:
<img width="829" height="782" alt="Image" src="https://github.com/user-attachments/assets/c736fa80-7824-4715-b2d0-ca3ed2e22830" />



## Usage

### Embed molecular files

Embed a supported file directly in your note:

```markdown
![[hemoglobin.pdb]]

![[caffeine.sdf]]
```

ChemRender3D automatically replaces the file embed with an interactive 3D viewer.

### Generate a structure from SMILES

Use a `3dmol` code block:

````markdown
```3dmol
CC(=O)OC1=CC=CC=C1C(=O)O
```
````

Note: The 3D coordinates from SMILES are generated for visualization and are not intended for geometry optimization or computational analysis.

### Reference a file

Alternatively, reference a molecular file inside a `3dmol` block:

````markdown
```3dmol
[[aspirin.mol]]
```
````

## Settings

* **Max Pixel Ratio** — Reduce this value on high-resolution displays to improve rendering performance.
* **Auto-Spin** — Automatically rotate embedded structures.

## Installation

1. Open **Settings → Community plugins → Browse**.
2. Search for **ChemRender3D**.
3. Install and enable the plugin.

## Acknowledgment

ChemRender3D is powered by [Mol*](https://molstar.org/), an open-source toolkit for visualization and analysis of large-scale molecular data.
