import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { FeatherModule } from "angular-feather";
import { allIcons } from "angular-feather/icons";
import { DemoFlexyModule } from "../demo-flexy-module";
import { BarreRechercheComponent } from "./barre-recherche/barre-recherche.component";
import { CreationCategorieComponent } from "./gestion-categorie/creation-categorie/creation-categorie.component";
import { CreerTypeThemeComponent } from "./gestion-categorie/creer-type-theme/creer-type-theme.component";
import { GestionCategorieComponent } from "./gestion-categorie/gestion-categorie.component";
import { GestionClientComponent } from "./gestion-client/gestion-client.component";
import { CreationDocumentComponent } from "./gestion-document/creation-document/creation-document.component";
import { GestionDocumentComponent } from "./gestion-document/gestion-document.component";
import { GestionExpertComponent } from "./gestion-expert/gestion-expert.component";
import { GestionManagerComponent } from "./gestion-manager/gestion-manager.component";
import { CreerOffreComponent } from "./gestion-offre/creer-offre/creer-offre.component";
import { DetailOffreComponent } from "./gestion-offre/detail-offre/detail-offre.component";
import { EditOffreComponent } from "./gestion-offre/edit-offre/edit-offre.component";
import { GestionOffreComponent } from "./gestion-offre/gestion-offre.component";
import { AjouterPartenairesComponent } from "./gestion-partenaires/ajouter-partenaires/ajouter-partenaires.component";
import { EditPartenaireComponent } from "./gestion-partenaires/edit-partenaire/edit-partenaire.component";
import { GestionPartenairesComponent } from "./gestion-partenaires/gestion-partenaires.component";
import { AjouterTagsComponent } from "./gestion-tags/ajouter-tags/ajouter-tags.component";
import { GestionTagsComponent } from "./gestion-tags/gestion-tags.component";
import { CreationTicketComponent } from "./gestion-ticket/creation-ticket/creation-ticket.component";
import { DetailTicketComponent } from "./gestion-ticket/detail-ticket/detail-ticket.component";
import { GestionTicketComponent } from "./gestion-ticket/gestion-ticket.component";
import { ComponentsRoutingModule } from "./components-routing";
import { NgbRatingModule } from "@ng-bootstrap/ng-bootstrap";
import { NgxPaginationModule } from "ngx-pagination";
import { EditCategorieComponent } from './gestion-categorie/edit-categorie/edit-categorie.component';
import { EditTypeThemeComponent } from "./gestion-categorie/edit-type-theme/edit-type-theme.component";
import { AjouterCompteComponent } from './ajouter-compte/ajouter-compte.component';

import { EditCompteComponent } from './edit-compte/edit-compte.component';
import { DetailCompteComponent } from './detail-compte/detail-compte.component';



@NgModule({
  declarations: [
    GestionClientComponent,
    GestionExpertComponent,
    GestionManagerComponent,
    GestionOffreComponent,
    CreerOffreComponent,
    GestionDocumentComponent,
    GestionTicketComponent,
    BarreRechercheComponent,
    CreationDocumentComponent,
    CreationTicketComponent,
    GestionCategorieComponent,
    CreationCategorieComponent,
    CreerTypeThemeComponent,
  
    GestionTagsComponent,
    AjouterTagsComponent,
    GestionPartenairesComponent,
    AjouterPartenairesComponent,
    DetailTicketComponent,
    EditPartenaireComponent,
    EditOffreComponent,
    DetailOffreComponent,
    EditCategorieComponent,
    EditTypeThemeComponent,
    AjouterCompteComponent,

    EditCompteComponent,
     DetailCompteComponent   
  ],
  imports: [
    CommonModule,
    FeatherModule.pick(allIcons),
    DemoFlexyModule,ReactiveFormsModule,
    FormsModule,NgxPaginationModule, ComponentsRoutingModule     
     ,NgbRatingModule],
  exports: [
    GestionClientComponent,
    GestionExpertComponent,
    GestionManagerComponent,
    GestionOffreComponent,
    
    CreerOffreComponent,
   
    GestionDocumentComponent,
    GestionTicketComponent,
    BarreRechercheComponent,
    CreationDocumentComponent,
    CreationTicketComponent,
    GestionCategorieComponent,
    CreationCategorieComponent,
    CreerTypeThemeComponent,
   
    GestionTagsComponent,
    AjouterTagsComponent,
    GestionPartenairesComponent,
    AjouterPartenairesComponent,
    DetailTicketComponent,
  ]
})
export class ComponentsModule { }
