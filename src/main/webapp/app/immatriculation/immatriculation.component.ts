import { Component, OnInit } from '@angular/core';
import { IRepresentantLegal } from 'app/shared/model/representant-legal.model';
import { IUser } from 'app/core/user/user.model';
import { FormBuilder, Validators } from '@angular/forms';
import { Employeur, EmpoyeursService } from 'app/services/empoyeurs.service';
import { EtablissementsService, Etablissemnt } from 'app/services/etablissements.service';
import { Convention, ConventionsService } from 'app/services/conventions.service';
import { Etatcivil, EtatcivilsService } from 'app/services/etatcivils.service';
import { Naturecontrat, NaturecontratService } from 'app/services/naturecontrat.service';
import { Piece, PiecesService } from 'app/services/pieces.service';
import { StatutJuridique, StatutjuridiqueService } from 'app/services/statutjuridique.service';

@Component({
  selector: 'jhi-immatriculation',
  templateUrl: './immatriculation.component.html',
  styleUrls: ['./immatriculation.component.scss']
})
export class ImmatriculationComponent implements OnInit {
  isSaving = false;
  representantlegals: IRepresentantLegal[] = [];
  users: IUser[] = [];
  employeurs: Employeur[] = [];
  etablissents: Etablissemnt[] = [];
  conventions: Convention[] = [];
  etatCivils: Etatcivil[] = [];
  natureContrats: Naturecontrat[] = [];
  pieces: Piece[] = [];
  statutJuridiques: StatutJuridique[] = [];

  taxIdDateDp: any;
  tradeRegisterDateDp: any;
  dateOfInpsectionDp: any;
  dateOfFirtHireDp: any;

  immatForm = this.fb.group({
    id: [],
    regType: [],
    employerType: [null, [Validators.required]],
    typeEtablissement: [null, [Validators.required]],
    employerName: [null, [Validators.required]],
    hqId: [],
    nineaNumber: [null, [Validators.required]],
    ninetNumber: [],
    compagnyOriginId: [],
    legalStatus: [null, [Validators.required]],
    taxId: [],
    taxIdDate: [],
    tradeRegisterNumber: [],
    tradeRegisterDate: [],
    dateOfInpsection: [],
    dateOfFirtHire: [],
    shortName: [],
    businessSector: [null, [Validators.required]],
    mainLineOfBusiness: [null, [Validators.required]],
    noOfWorkersInGenScheme: [],
    noOfWorkersInBasicScheme: [],
    region: [null, [Validators.required]],
    department: [null, [Validators.required]],
    arondissement: [null, [Validators.required]],
    commune: [null, [Validators.required]],
    qartier: [null, [Validators.required]],
    address: [null, [Validators.required]],
    postboxNo: [],
    telephone: [],
    email: [],
    website: [],
    zoneCss: [],
    zoneIpres: [],
    sectorCss: [],
    sectorIpres: [],
    agencyCss: [],
    agencyIpres: [],
    employerRegistrationFormId: [],
    employeeRegistrationFormId: [],
    processFlowId: [],
    statutDossier: [],
    statutImmatriculation: [],
    representantLegal: [],
    user: []
  });

  constructor(
    private fb: FormBuilder,
    private conventionsService: ConventionsService,
    private statutjuridiqueService: StatutjuridiqueService,
    private piecesServices: PiecesService,
    private natureContratService: NaturecontratService,
    private etablissementservice: EtablissementsService,
    private employeursServices: EmpoyeursService,
    private etatCivilsService: EtatcivilsService
  ) {}

  ngOnInit(): void {
    this.statutJuridiques = this.statutjuridiqueService.getStatutJuridiques();
    this.conventions = this.conventionsService.getConvention();
    this.pieces = this.piecesServices.getPieces();
    this.natureContrats = this.natureContratService.getNatureContrat();
    this.etablissents = this.etablissementservice.getTypeEtlissement();
    this.employeurs = this.employeursServices.getTypeEmployeur();
    this.etatCivils = this.etatCivilsService.getTypeEtatCivil();
  }

  save(): void {
    this.isSaving = false;
  }
}
