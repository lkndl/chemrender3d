import { App } from 'obsidian';

export interface ChemRender3DSettings {
    autoPlayTrajectory: boolean;
    autoSpinCamera: boolean;
    showUIPanels: boolean;
    viewerHeight: string;
    supportedExtensions: string;
    showNonCovalent: boolean;
    maxPixelRatio: number;
    preventAppClick: boolean;
    defaultPreset: 'auto' | 'illustrative' | 'polymer-and-ligand' | 'ball-and-stick' | 'spacefill';
    defaultColorTheme: 'auto' | 'element-symbol' | 'chain-id' | 'plddt-confidence' | 'partial-charge';
    gridMaxFiles: number;
    colorByPartialCharge: boolean;
    volumeIsoValue: number;
    volumeDualIsoLobe: boolean; // Render +/- lobes for quantum wavefunctions
    hideWaterByDefault: boolean;
    enableQuickHUD: boolean;
}

export const DEFAULT_SETTINGS: ChemRender3DSettings = {
    autoPlayTrajectory: true,
    autoSpinCamera: false,
    showUIPanels: false,
    viewerHeight: '400px',
    supportedExtensions: 'pdb, ent, pdbqt, pqr, cif, mmcif, bcif, gro, mol, mol2, sdf, sd, xyz, cube, cub, poscar, contcar, vasp, gjf, com',
    showNonCovalent: false,
    maxPixelRatio: 1.0,
    preventAppClick: true,
    defaultPreset: 'auto',
    defaultColorTheme: 'auto',
    gridMaxFiles: 12,
    colorByPartialCharge: false,
    volumeIsoValue: 0.02,
    volumeDualIsoLobe: true,
    hideWaterByDefault: true,
    enableQuickHUD: true
};

export interface RenderParams {
    type: 'file' | 'smiles' | 'pdb' | 'afdb' | 'pubchem' | 'esmfold';
    target: string;
    sourcePath: string;
    preset?: string;
    color?: string;
    spin?: boolean;
    surface?: boolean;
    charges?: boolean;
    noncovalent?: boolean;
    water?: boolean;
    height?: string;
    isoValue?: number;
}