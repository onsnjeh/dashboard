import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FeatherModule } from 'angular-feather';
import { allIcons } from 'angular-feather/icons';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FullComponent } from './layouts/full/full.component';
import { DemoFlexyModule } from './demo-flexy-module'

// Modules
import { DashboardModule } from './dashboard/dashboard.module';
import { ComponentsModule } from './components/components.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './layouts/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { ProfilComponent } from './layouts/profil/profil.component';
import { ModifierProfilComponent } from './layouts/profil/modifier-profil/modifier-profil.component';
import { DetailCategorieComponent } from './src/app/components/gestion-categorie/detail-categorie/detail-categorie.component';
import { DetailTypeThemeComponent } from './src/app/components/gestion-categorie/detail-type-theme/detail-type-theme.component';

@NgModule({
  declarations: [
    AppComponent,
    FullComponent,
    HeaderComponent,
    ProfilComponent,
    ModifierProfilComponent,
    DetailCategorieComponent,
    DetailTypeThemeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FeatherModule.pick(allIcons),
    DemoFlexyModule,
    DashboardModule,
    ComponentsModule,
    FormsModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
