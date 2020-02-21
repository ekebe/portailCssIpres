import { Injectable } from '@angular/core';
import { Etablissemnt } from 'app/services/etablissements.service';

@Injectable({
  providedIn: 'root'
})
export class Etatcivil {
  constructor(public code: string, public description: string) {}
}

const etatCivils = [
  {
    code: 'CEL',
    description: 'Célibataire'
  },
  {
    code: 'DIV',
    description: 'Divorcé'
  },
  {
    code: 'MAR',
    description: 'Marié'
  },
  {
    code: 'VEU',
    description: 'Veuf/Veuve'
  }
];

export class EtatcivilsService {
  getTypeEtatCivil(): Etatcivil[] {
    return etatCivils.map(p => new Etatcivil(p.code, p.description));
  }
  getEtatcivilByCode(code: string): Etatcivil {
    return etatCivils.find(p => p.code === code) as Etatcivil;
  }
}
