import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PortailCssipresSharedModule } from 'app/shared/shared.module';
import { DeclarationComponent } from './declaration.component';
import { DeclarationDetailComponent } from './declaration-detail.component';
import { DeclarationUpdateComponent } from './declaration-update.component';
import { DeclarationDeleteDialogComponent } from './declaration-delete-dialog.component';
import { declarationRoute } from './declaration.route';

@NgModule({
  imports: [PortailCssipresSharedModule, RouterModule.forChild(declarationRoute)],
  declarations: [DeclarationComponent, DeclarationDetailComponent, DeclarationUpdateComponent, DeclarationDeleteDialogComponent],
  entryComponents: [DeclarationDeleteDialogComponent]
})
export class PortailCssipresDeclarationModule {}
