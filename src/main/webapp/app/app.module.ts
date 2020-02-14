import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { PortailCssipresSharedModule } from 'app/shared/shared.module';
import { PortailCssipresCoreModule } from 'app/core/core.module';
import { PortailCssipresAppRoutingModule } from './app-routing.module';
import { PortailCssipresHomeModule } from './home/home.module';
import { PortailCssipresEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    PortailCssipresSharedModule,
    PortailCssipresCoreModule,
    PortailCssipresHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    PortailCssipresEntityModule,
    PortailCssipresAppRoutingModule
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
  bootstrap: [MainComponent]
})
export class PortailCssipresAppModule {}
