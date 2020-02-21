import { Injectable } from '@angular/core';
import { Etablissemnt } from 'app/services/etablissements.service';

@Injectable({
  providedIn: 'root'
})
export class Convention {
  constructor(public code: string, public description: string) {}
}

const conventions = [
  {
    code: 'CC1',
    description: "CC des entreprises d'assurance, 30 juillet 1977"
  },
  {
    code: 'CC2',
    description: 'CC du transport aérien, 08 novembre 1965'
  },
  {
    code: 'CC3',
    description: 'CC des industries fédérales du vêtement, 10 janvier 1963'
  },
  {
    code: 'CC4',
    description: 'CC du transport routier professionnel, 17 décembre 1959'
  },
  {
    code: 'CC5',
    description: "CC de l'industrie du corps gras, 04 juillet 1958"
  },
  {
    code: 'NCA1',
    description: 'CC pour les industries alimentaires, 19 juillet 1958'
  },
  {
    code: 'NCA2',
    description: 'CC Inter professionnelle du Sénégal, 27 mai 1982'
  },
  {
    code: 'NCA3',
    description: 'CC des industries chimiques, 23 juillet 1958'
  },
  {
    code: 'NCA4',
    description: 'CC pour les industries alimentaires, 19 juillet 1958'
  },
  {
    code: 'NCATI',
    description: 'CC nationale des industries textiles'
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

export class ConventionsService {
  getConvention(): Convention[] {
    return conventions.map(p => new Convention(p.code, p.description));
  }
  getConventionByCode(code: string): Convention {
    return conventions.find(p => p.code === code) as Convention;
  }
}
