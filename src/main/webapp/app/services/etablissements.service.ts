import { Injectable } from '@angular/core';
import { Employeur } from 'app/services/empoyeurs.service';

@Injectable({
  providedIn: 'root'
})
export class Etablissemnt {
  constructor(public code: string, public description: string) {}
}

const etablissements = [
  {
    code: 'HDQT',
    description: 'Siége'
  },
  {
    code: 'BRNC',
    description: 'Agence / Sucursale'
  },
  {
    code: 'CNST',
    description: 'Chantier'
  }
];

export class EtablissementsService {
  getTypeEtlissement(): Etablissemnt[] {
    return etablissements.map(p => new Etablissemnt(p.code, p.description));
  }
  getEmployeurByCode(code: string): Etablissemnt {
    return etablissements.find(p => p.code === code) as Etablissemnt;
  }
}
