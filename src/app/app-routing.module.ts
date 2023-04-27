import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { FullComponent } from './layouts/full/full.component';
import { CreationCategorieComponent } from './components/gestion-categorie/creation-categorie/creation-categorie.component';
import { CreerTypeThemeComponent } from './components/gestion-categorie/creer-type-theme/creer-type-theme.component';
import { GestionCategorieComponent } from './components/gestion-categorie/gestion-categorie.component';
import { GestionClientComponent } from './components/gestion-client/gestion-client.component';
import { CreationDocumentComponent } from './components/gestion-document/creation-document/creation-document.component';
import { GestionDocumentComponent } from './components/gestion-document/gestion-document.component';

import { CreerOffreComponent } from './components/gestion-offre/creer-offre/creer-offre.component';
import { GestionOffreComponent } from './components/gestion-offre/gestion-offre.component';
import { AjouterPartenairesComponent } from './components/gestion-partenaires/ajouter-partenaires/ajouter-partenaires.component';
import { GestionPartenairesComponent } from './components/gestion-partenaires/gestion-partenaires.component';
import { AjouterTagsComponent } from './components/gestion-tags/ajouter-tags/ajouter-tags.component';
import { GestionTagsComponent } from './components/gestion-tags/gestion-tags.component';
import { CreationTicketComponent } from './components/gestion-ticket/creation-ticket/creation-ticket.component';
import { GestionTicketComponent } from './components/gestion-ticket/gestion-ticket.component';
import { EditPartenaireComponent } from './components/gestion-partenaires/edit-partenaire/edit-partenaire.component';
import { EditOffreComponent } from './components/gestion-offre/edit-offre/edit-offre.component';
import { DetailOffreComponent } from './components/gestion-offre/detail-offre/detail-offre.component';
import { EditCategorieComponent } from './components/gestion-categorie/edit-categorie/edit-categorie.component';
import { EditTypeThemeComponent } from './components/gestion-categorie/edit-type-theme/edit-type-theme.component';
import { AjouterCompteComponent } from './components/ajouter-compte/ajouter-compte.component';
import { EditCompteComponent } from './components/edit-compte/edit-compte.component';
import { DetailCompteComponent } from './components/detail-compte/detail-compte.component';
import { GestionManagerExpertComponent } from './components/gestion-manager-expert/gestion-manager-expert.component';
import { DetailCategorieComponent } from './components/gestion-categorie/detail-categorie/detail-categorie.component';
import { RepondreTicketComponent } from './components/gestion-ticket/repondre-ticket/repondre-ticket.component';
import { DetailTicketComponent } from './components/gestion-ticket/detail-ticket/detail-ticket.component';
import { EditDocumentComponent } from './components/gestion-document/edit-document/edit-document.component';
import { DetailDocumentComponent } from './components/gestion-document/detail-document/detail-document.component';
import { ProfilComponent } from './layouts/profil/profil.component';




const routes: Routes = [
  {
    path:"",
    component:FullComponent,
    children: [
      {path:"", redirectTo:"/home", pathMatch:"full"},
      {path:"home", component:DashboardComponent},
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
      {path:"repondre-ticket/:id",component:RepondreTicketComponent},
      { path:'edit-partenaire/:id', component: EditPartenaireComponent },
      { path:'edit-offre/:id', component: EditOffreComponent},
      
      { path: 'edit-type-theme/:id', component: EditTypeThemeComponent },
     
      { path:'detail-categorie/:id', component: DetailCategorieComponent },
     
      { path:'detail-ticket/:id', component: DetailTicketComponent },
      { path:'edit-document/:id', component: EditDocumentComponent },
      { path:'detail-document/:id', component: DetailDocumentComponent },
      { path:'profil', component: ProfilComponent },

     
      



    
    ]
  },

  {path:"", redirectTo:"/home", pathMatch:"full"},
  {path:"**", redirectTo:"/home", pathMatch:"full"},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
