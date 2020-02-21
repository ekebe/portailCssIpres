import { Injectable } from '@angular/core';
import { Etatcivil } from 'app/services/etatcivils.service';

@Injectable({
  providedIn: 'root'
})
export class Naturecontrat {
  constructor(public code: string, public description: string) {}
}

const naturecontrats = [
  {
    code: 'CDD',
    description: 'Contrat à durée determiné'
  },
  {
    code: 'CDI',
    description: 'Contrat à durée indeterminé'
  },
  {
    code: 'JOU',
    description: 'Journalier'
  },
  {
    code: 'SPE',
    description: 'Contrat Spécial'
  },
  {
    code: 'STA',
    description: 'Contrat de stage'
  }
];

export class NaturecontratService {
  getNatureContrat(): Naturecontrat[] {
    return naturecontrats.map(p => new Naturecontrat(p.code, p.description));
  }
  getNatureContratByCode(code: string): Naturecontrat {
    return naturecontrats.find(p => p.code === code) as Naturecontrat;
  }
}
