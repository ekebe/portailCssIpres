import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Employeur {
  constructor(public code: string, public description: string) {}
}

const employeurs = [
  {
    code: 'ASSO',
    description: 'Association'
  },
  {
    code: 'COOP',
    description: 'Coopérative'
  },
  {
    code: 'DOM',
    description: 'Domestique'
  },
  {
    code: 'GIE',
    description: 'GIE'
  },
  {
    code: 'INDV',
    description: 'Entreprise Individuelle'
  },
  {
    code: 'LIB',
    description: 'Association'
  },
  {
    code: 'ASSO',
    description: 'Profession Libérale'
  },
  {
    code: 'MAIN',
    description: 'Maintien Affiliation'
  },
  {
    code: 'NGO',
    description: 'ONG'
  },
  {
    code: 'PROJ',
    description: 'Projet'
  },
  {
    code: 'PUB_PARA',
    description: 'Structure publique et parapublique'
  },
  {
    code: 'PVT',
    description: 'Société privée'
  },
  {
    code: 'REP_DIP',
    description: 'Représentation diplomatique'
  },
  {
    code: 'TIND',
    description: 'Travailleur indépendant'
  }
];

export class EmpoyeursService {
  getTypeEmployeur(): Employeur[] {
    return employeurs.map(p => new Employeur(p.code, p.description));
  }
  getEmployeurByCode(code: string): Employeur {
    return employeurs.find(p => p.code === code) as Employeur;
  }
}
