import { Injectable } from '@angular/core';
import { FormData } from 'app/immatriculation/form-data';
import { Immatriculation } from 'app/shared/model/immatriculation.model';

import { RepresentantLegal } from 'app/shared/model/representant-legal.model';
import { User } from 'app/core/user/user.model';
import { Declaration } from 'app/shared/model/declaration.model';
import { Employe } from 'app/shared/model/employe.model';
import { Document } from 'app/shared/model/document.model';

@Injectable({
  providedIn: 'root'
})
export class ImmatriculationDataService {
  private formData: FormData = new FormData();
  private isImmatriculationFormValid = false;
  private isRepresentantLegalFormValid = false;
  private isSalarieFormValid = false;

  getImmatriculation(): Immatriculation {
    const immatriculation: Immatriculation = {
      regType: this.formData.regType,
      employerType: this.formData.employerType,
      typeEtablissement: this.formData.typeEtablissement,
      employerName: this.formData.employerName,
      hqId: this.formData.hqId,
      nineaNumber: this.formData.nineaNumber,
      ninetNumber: this.formData.ninetNumber,
      compagnyOriginId: this.formData.compagnyOriginId,
      legalStatus: this.formData.legalStatus,
      taxId: this.formData.taxId,
      taxIdDate: this.formData.taxIdDate,
      tradeRegisterNumber: this.formData.tradeRegisterNumber,
      tradeRegisterDate: this.formData.tradeRegisterDate,
      dateOfInpsection: this.formData.dateOfInpsection,
      dateOfFirtHire: this.formData.dateOfFirtHire,
      shortName: this.formData.shortName,
      businessSector: this.formData.businessSector,
      mainLineOfBusiness: this.formData.mainLineOfBusiness,
      noOfWorkersInGenScheme: this.formData.noOfWorkersInGenScheme,
      noOfWorkersInBasicScheme: this.formData.noOfWorkersInBasicScheme,
      region: this.formData.region,
      department: this.formData.department,
      arondissement: this.formData.arondissement,
      commune: this.formData.commune,
      qartier: this.formData.qartier,
      address: this.formData.address,
      postboxNo: this.formData.postboxNo,
      telephone: this.formData.telephone,
      email: this.formData.email,
      website: this.formData.website,
      zoneCss: this.formData.zoneCss,
      zoneIpres: this.formData.zoneIpres,
      sectorCss: this.formData.sectorCss,
      sectorIpres: this.formData.sectorIpres,
      agencyCss: this.formData.agencyCss,
      agencyIpres: this.formData.sectorIpres,
      employerRegistrationFormId: this.formData.employerRegistrationFormId,
      employeeRegistrationFormId: this.formData.employeeRegistrationFormId,
      processFlowId: this.formData.processFlowId,
      statutDossier: this.formData.statutDossier,
      statutImmatriculation: this.formData.statutImmatriculation,
      representantLegal: this.formData.representantLegal,
      user: this.formData.user,
      declarations: this.formData.declarations,
      employes: this.formData.employes,
      documents: this.formData.documents
    };
    return immatriculation;
  }

  setImmatriculation(data: Immatriculation): void {
    this.isImmatriculationFormValid = true;
    this.formData.regType = data.regType;
    this.formData.employerType = data.employerType;
    this.formData.typeEtablissement = data.typeEtablissement;
    this.formData.employerName = data.employerName;
    this.formData.hqId = data.hqId;
    this.formData.nineaNumber = data.nineaNumber;
    this.formData.ninetNumber = data.ninetNumber;
    this.formData.compagnyOriginId = data.compagnyOriginId;
    this.formData.legalStatus = data.legalStatus;
    this.formData.taxId = data.taxId;
    this.formData.taxIdDate = data.taxIdDate;
    this.formData.tradeRegisterNumber = data.tradeRegisterNumber;
    this.formData.tradeRegisterDate = data.tradeRegisterDate;
    this.formData.dateOfInpsection = data.dateOfInpsection;
    this.formData.dateOfFirtHire = data.dateOfFirtHire;
    this.formData.shortName = data.shortName;
    this.formData.businessSector = data.businessSector;
    this.formData.mainLineOfBusiness = data.mainLineOfBusiness;
    this.formData.noOfWorkersInGenScheme = data.noOfWorkersInGenScheme;
    this.formData.noOfWorkersInBasicScheme = data.noOfWorkersInBasicScheme;
    this.formData.region = data.region;
    this.formData.department = data.department;
    this.formData.arondissement = data.arondissement;
    this.formData.commune = data.commune;
    this.formData.qartier = data.qartier;
    this.formData.postboxNo = data.postboxNo;
    this.formData.address = data.address;
    this.formData.email = data.email;
    this.formData.website = data.website;
    this.formData.zoneCss = data.zoneCss;
    this.formData.zoneIpres = data.zoneIpres;
    this.formData.sectorCss = data.sectorCss;
    this.formData.sectorIpres = data.sectorIpres;
    this.formData.agencyCss = data.agencyCss;
    this.formData.agencyIpres = data.agencyIpres;
    this.formData.employerRegistrationFormId = data.employerRegistrationFormId;
    this.formData.employeeRegistrationFormId = data.employeeRegistrationFormId;
    this.formData.processFlowId = data.processFlowId;
    this.formData.statutDossier = data.statutDossier;
    this.formData.statutImmatriculation = data.statutImmatriculation;
    this.formData.representantLegal = data.representantLegal;
    this.formData.user = data.user;
    this.formData.declarations = data.declarations;
    this.formData.employes = data.employes;
    this.formData.documents = data.documents;
  }
}
