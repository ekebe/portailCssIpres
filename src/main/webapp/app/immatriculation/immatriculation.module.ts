import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImmatriculationRoutingModule } from './immatriculation-routing.module';
import { ImmatriculationComponent } from './immatriculation.component';
import { ArchwizardModule } from 'ng2-archwizard';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ImmatriculationDataService } from 'app/immatriculation/immatriculation-data.service';
import { ReactiveFormsModule } from '@angular/forms';
import { NgJhipsterModule } from 'ng-jhipster';
import { EmpoyeursService } from 'app/services/empoyeurs.service';
import { EtablissementsService } from 'app/services/etablissements.service';
import { EtatcivilsService } from 'app/services/etatcivils.service';
import { NaturecontratService } from 'app/services/naturecontrat.service';
import { PiecesService } from 'app/services/pieces.service';
import { StatutjuridiqueService } from 'app/services/statutjuridique.service';
import { ConventionsService } from 'app/services/conventions.service';

@NgModule({
  declarations: [ImmatriculationComponent],
  imports: [CommonModule, ArchwizardModule, ImmatriculationRoutingModule, FontAwesomeModule, ReactiveFormsModule, NgJhipsterModule],
  providers: [
    ImmatriculationDataService,
    EmpoyeursService,
    EtablissementsService,
    EtatcivilsService,
    NaturecontratService,
    PiecesService,
    StatutjuridiqueService,
    ConventionsService
  ]
})
export class ImmatriculationModule {}
