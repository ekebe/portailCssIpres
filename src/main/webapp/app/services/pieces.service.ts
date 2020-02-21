import { Injectable } from '@angular/core';
import { Naturecontrat } from 'app/services/naturecontrat.service';

@Injectable({
  providedIn: 'root'
})
export class Piece {
  constructor(public code: string, public description: string) {}
}

const pieces = [
  {
    code: 'CDEAO',
    description: 'Carte identité CDEAO'
  },
  {
    code: 'CONC',
    description: 'Carte Consulaire '
  },
  {
    code: 'NIN',
    description: 'Carte identité nationale'
  },
  {
    code: 'PASS',
    description: 'Passport'
  }
];

export class PiecesService {
  getPieces(): Piece[] {
    return pieces.map(p => new Piece(p.code, p.description));
  }
  getPieceByCode(code: string): Piece {
    return pieces.find(p => p.code === code) as Piece;
  }
}
