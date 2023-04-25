
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CreationCategorieComponent } from "./gestion-categorie/creation-categorie/creation-categorie.component";
import { CreerTypeThemeComponent } from "./gestion-categorie/creer-type-theme/creer-type-theme.component";
import { CreationDocumentComponent } from "./gestion-document/creation-document/creation-document.component";
import { CreerOffreComponent } from "./gestion-offre/creer-offre/creer-offre.component";
import { AjouterPartenairesComponent } from "./gestion-partenaires/ajouter-partenaires/ajouter-partenaires.component";
import { AjouterTagsComponent } from "./gestion-tags/ajouter-tags/ajouter-tags.component";
import { CreationTicketComponent } from "./gestion-ticket/creation-ticket/creation-ticket.component";
import { DetailTicketComponent } from "./gestion-ticket/detail-ticket/detail-ticket.component";
import { GestionTicketComponent } from "./gestion-ticket/gestion-ticket.component";
import { GestionCategorieComponent } from "./gestion-categorie/gestion-categorie.component";
import { GestionClientComponent } from "./gestion-client/gestion-client.component";
import { GestionDocumentComponent } from "./gestion-document/gestion-document.component";
import { GestionOffreComponent } from "./gestion-offre/gestion-offre.component";
import { GestionPartenairesComponent } from "./gestion-partenaires/gestion-partenaires.component";
import { GestionTagsComponent } from "./gestion-tags/gestion-tags.component";
import { EditOffreComponent } from "./gestion-offre/edit-offre/edit-offre.component";
import { EditPartenaireComponent } from "./gestion-partenaires/edit-partenaire/edit-partenaire.component";
import { DetailOffreComponent } from "./gestion-offre/detail-offre/detail-offre.component";
import { EditCategorieComponent } from "./gestion-categorie/edit-categorie/edit-categorie.component";
import { EditTypeThemeComponent } from "./gestion-categorie/edit-type-theme/edit-type-theme.component";
import { AjouterCompteComponent } from "./ajouter-compte/ajouter-compte.component";
import { EditCompteComponent } from "./edit-compte/edit-compte.component";
import { DetailCompteComponent } from "./detail-compte/detail-compte.component";
import { GestionManagerExpertComponent } from "./gestion-manager-expert/gestion-manager-expert.component";
import { DetailCategorieComponent } from "./gestion-categorie/detail-categorie/detail-categorie.component";


export const routes: Routes = [

 {path:"gestion-client",component:GestionClientComponent},
 {path:"gestion-manager-expert",component:GestionManagerExpertComponent},
 { path: 'ajouter-compte', component: AjouterCompteComponent },
 { path: 'edit-compte/:id', component: EditCompteComponent },
 { path:'detail-compte/:id', component: DetailCompteComponent },

 {path:"gestion-offre",component:GestionOffreComponent},
 {path:"ajouter-offre",component:CreerOffreComponent},
 { path:'detail-offre/:id', component: DetailOffreComponent },

 {path:"gestion-document",component:GestionDocumentComponent},
 {path:"ajouter-Document",component:CreationDocumentComponent},

 {path:"ajouter-offre",component:CreerOffreComponent},
 {path:"gestion-ticket",component:GestionTicketComponent},
 {path:"ajouter-type-theme",component:CreerTypeThemeComponent},
 {path:"ajouter-ticket",component:CreationTicketComponent},
 {path:"gestion-categorie",component:GestionCategorieComponent},
 {path:"ajouter-categorie",component:CreationCategorieComponent},
 { path: 'edit-categorie/:id', component: EditCategorieComponent },

 {path:"gestion-tags" ,component:GestionTagsComponent},
 {path:"ajouter-tags" ,component:AjouterTagsComponent},
 {path:"gestion-partenaires" ,component:GestionPartenairesComponent},
 {path:"ajouter-partenaires  " ,component:AjouterPartenairesComponent},
 {path:"detail-ticket/:id",component:DetailTicketComponent},
 { path:'edit-partenaire/:id', component: EditPartenaireComponent },
 { path:'edit-offre/:id', component: EditOffreComponent},
 
 { path: 'edit-type-theme/:id', component: EditTypeThemeComponent },

 { path:'detail-categorie/:id', component: DetailCategorieComponent },






   ]
   @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class ComponentsRoutingModule { }
  