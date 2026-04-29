export interface Projekt {
  id: string;
  titel: string;
  kategorien: string[];
  jahr: string;
  auftraggeber: string;
  leistungsumfang: string;
  titelBild: string;
  galerie: string[];
  video?: string;
}

export interface ProjektDetail extends Projekt {
  prevId: string | null;
  nextId: string | null;
}
