import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { JhiDataUtils, JhiFileLoadError, JhiEventManager, JhiEventWithContent } from 'ng-jhipster';

import { IDocument, Document } from 'app/shared/model/document.model';
import { DocumentService } from './document.service';
import { AlertError } from 'app/shared/alert/alert-error.model';
import { IImmatriculation } from 'app/shared/model/immatriculation.model';
import { ImmatriculationService } from 'app/entities/immatriculation/immatriculation.service';

@Component({
  selector: 'jhi-document-update',
  templateUrl: './document-update.component.html'
})
export class DocumentUpdateComponent implements OnInit {
  isSaving = false;
  immatriculations: IImmatriculation[] = [];

  editForm = this.fb.group({
    id: [],
    name: [],
    url: [],
    document: [],
    documentContentType: [],
    employeur: []
  });

  constructor(
    protected dataUtils: JhiDataUtils,
    protected eventManager: JhiEventManager,
    protected documentService: DocumentService,
    protected immatriculationService: ImmatriculationService,
    protected activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ document }) => {
      this.updateForm(document);

      this.immatriculationService.query().subscribe((res: HttpResponse<IImmatriculation[]>) => (this.immatriculations = res.body || []));
    });
  }

  updateForm(document: IDocument): void {
    this.editForm.patchValue({
      id: document.id,
      name: document.name,
      url: document.url,
      document: document.document,
      documentContentType: document.documentContentType,
      employeur: document.employeur
    });
  }

  byteSize(base64String: string): string {
    return this.dataUtils.byteSize(base64String);
  }

  openFile(contentType: string, base64String: string): void {
    this.dataUtils.openFile(contentType, base64String);
  }

  setFileData(event: Event, field: string, isImage: boolean): void {
    this.dataUtils.loadFileToForm(event, this.editForm, field, isImage).subscribe(null, (err: JhiFileLoadError) => {
      this.eventManager.broadcast(
        new JhiEventWithContent<AlertError>('portailCssipresApp.error', { ...err, key: 'error.file.' + err.key })
      );
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const document = this.createFromForm();
    if (document.id !== undefined) {
      this.subscribeToSaveResponse(this.documentService.update(document));
    } else {
      this.subscribeToSaveResponse(this.documentService.create(document));
    }
  }

  private createFromForm(): IDocument {
    return {
      ...new Document(),
      id: this.editForm.get(['id'])!.value,
      name: this.editForm.get(['name'])!.value,
      url: this.editForm.get(['url'])!.value,
      documentContentType: this.editForm.get(['documentContentType'])!.value,
      document: this.editForm.get(['document'])!.value,
      employeur: this.editForm.get(['employeur'])!.value
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IDocument>>): void {
    result.subscribe(
      () => this.onSaveSuccess(),
      () => this.onSaveError()
    );
  }

  protected onSaveSuccess(): void {
    this.isSaving = false;
    this.previousState();
  }

  protected onSaveError(): void {
    this.isSaving = false;
  }

  trackById(index: number, item: IImmatriculation): any {
    return item.id;
  }
}
