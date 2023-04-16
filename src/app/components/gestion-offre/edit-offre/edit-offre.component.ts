import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Offre } from 'src/app/core/models/offre.model';
import { OffreService } from 'src/app/core/services/offre.service';

@Component({
  selector: 'app-edit-offre',
  templateUrl: './edit-offre.component.html',
  styleUrls: ['./edit-offre.component.scss']
})
export class EditOffreComponent implements OnInit {
  Offre!:Offre;
  OffreForm = this.formBuilder.group({
    titre: ['', Validators.required],
    periode: ['', Validators.required],
    prix: ['', Validators.required],
    description: ['', Validators.required],
    dateDebut :['', Validators.required],
    dateFin : ['', Validators.required],
   });
 
   constructor(
     private route: ActivatedRoute,
     private formBuilder: FormBuilder,
     private OffreService:OffreService,
     private router: Router
   ) { }
 
   ngOnInit() {
     const id = this.route.snapshot.paramMap.get('id');
   this.OffreService.getById(Number(id))
     .subscribe(Offre => {
       if (Offre) { // add null check here
         this.Offre = Offre;
         this.OffreForm.setValue({
            titre: Offre.titre,
           periode: Offre.periode,
           prix: Offre.prix,
           description: Offre.description,
           dateDebut: Offre.dateDebut,
           dateFin: Offre.dateFin

         });
       }
     });
   }
 
   annuler(): void {
     this.router.navigate(['/gestion-offre']);
   }
   onSubmit() {
     const updatedOffre: Offre = {
       id: this.Offre.id,
       titre: this.OffreForm.value. titre ?? '',
       periode: this.OffreForm.value.periode ?? '',
       prix: this.OffreForm.value.prix ?? '',
       description: this.OffreForm.value.description ?? '',
       dateDebut: this.OffreForm.value.dateDebut?? '',
       dateFin: this.OffreForm.value.dateFin ?? '',

     };
     this.OffreService.update(this.Offre.id,updatedOffre)
     .subscribe(() => this.router.navigateByUrl('/gestion-offre'));
     alert("Offre modifié avec succès.")
     }

}
