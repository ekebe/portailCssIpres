import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'immatriculation',
        loadChildren: () => import('./immatriculation/immatriculation.module').then(m => m.PortailCssipresImmatriculationModule)
      },
      {
        path: 'document',
        loadChildren: () => import('./document/document.module').then(m => m.PortailCssipresDocumentModule)
      },
      {
        path: 'representant-legal',
        loadChildren: () => import('./representant-legal/representant-legal.module').then(m => m.PortailCssipresRepresentantLegalModule)
      },
      {
        path: 'employe',
        loadChildren: () => import('./employe/employe.module').then(m => m.PortailCssipresEmployeModule)
      },
      {
        path: 'declaration',
        loadChildren: () => import('./declaration/declaration.module').then(m => m.PortailCssipresDeclarationModule)
      }
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ])
  ]
})
export class PortailCssipresEntityModule {}
