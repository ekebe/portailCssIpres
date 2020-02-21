import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StatutJuridique {
  constructor(public code: string, public description: string) {}
}

const statutjuridiques = [
  {
    code: 'CONC',
    description: 'GIE'
  },
  {
    code: 'DEVP',
    description: 'Projet de développement'
  },

  {
    code: 'DIPR',
    description: 'Représentant diplomatique / Organisation International'
  },

  {
    code: 'ENTE',
    description: 'SA'
  },
  {
    code: 'LIBP',
    description: 'Profession Libérale'
  },

  {
    code: 'LOCE',
    description: 'SARL'
  },
  {
    code: 'PHYP',
    description: 'SUARL'
  },
  {
    code: 'PUB',
    description: 'Société en commandite'
  },
  {
    code: 'PUBP',
    description: 'Etablissement publique et parapublique'
  }
];

export class StatutjuridiqueService {
  getStatutJuridiques(): StatutJuridique[] {
    return statutjuridiques.map(p => new StatutJuridique(p.code, p.description));
  }
  getStatutJuridiqueByCode(code: string): StatutJuridique {
    return statutjuridiques.find(p => p.code === code) as StatutJuridique;
  }
}
