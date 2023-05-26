import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Categorie, Theme, Type } from 'src/app/core/models/categorie.model';
import { CategorieService } from 'src/app/core/services/categorie.service';

@Component({
  selector: 'app-edit-categorie',
  templateUrl: './edit-categorie.component.html',
  styleUrls: ['./edit-categorie.component.scss']
})
export class EditCategorieComponent implements OnInit {
  categorie!: Categorie;
  types!: Type[];
  themes!: Theme[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private categorieService: CategorieService,
   
  ) { }

  ngOnInit() {
    const categorieId = Number(this.route.snapshot.paramMap.get('id'));
    this.loadCategorie(categorieId);
    this.loadTypesByCategorie(categorieId);
    this.loadThemesByCategorie(categorieId);
  }

  loadCategorie(categorieId: number) {
    this.categorieService.getById(categorieId).subscribe(categorie => {
      this.categorie = categorie;
    });
  }

  loadTypesByCategorie(categorieId: number) {
    this.categorieService.getTypeBycategorieId(categorieId).subscribe(types => {
      this.types = types;
    });
  }

  loadThemesByCategorie(categorieId: number) {
    this.categorieService.getThemeBycategorieId(categorieId).subscribe(themes => {
      this.themes = themes;
    });
  }

  updateCategorie() {
    this.categorieService.updateCategorie(this.categorie).subscribe(() => {
      alert('Catégorie mise à jour avec succès');
    }, (err) => {
      alert('Erreur lors de la mise à jour de la catégorie');
    });
  }

  updateType(type: Type) {
    this.categorieService.updateType(type).subscribe(() => {
      alert('Type mis à jour avec succès');
    }, (err) => {
      alert('Erreur lors de la mise à jour du type');
    });
  }

  updateTheme(theme: Theme) {
    this.categorieService.updateTheme(theme).subscribe(() => {
      alert('Thème mis à jour avec succès');
    }, (err) => {
      alert('Erreur lors de la mise à jour du thème');
    });
  }
  annuler()
 { this.router.navigate(['/gestion-categorie']);}
}

  // Categorie!:Categorie;
  // CategorieForm = this.formBuilder.group({
  //    name: ['', Validators.required],
  //    description: ['', Validators.required],
  //  });
 
  //  constructor(
  //    private route: ActivatedRoute,
  //    private formBuilder: FormBuilder,
  //    private CategorieService:CategorieService,
  //    private router: Router
  //  ) { }
 
  //  ngOnInit() {
  //    const id = this.route.snapshot.paramMap.get('id');
  //  this.CategorieService.getById(Number(id))
  //    .subscribe(Categorie => {
  //      if (Categorie) { // add null check here
  //        this.Categorie = Categorie;
  //        this.CategorieForm.setValue({
  //          name: Categorie.name,
  //          description: Categorie.description
  //        });
  //      }
  //    });
  //  }
 
  // //  annuler(): void {
  // //    this.router.navigate(['/gestion-categorie']);
  // //  }
  //  onSubmit() {
  //    const updatedCategorie: Categorie = {
  //      id: this.Categorie.id,
  //      dateCreate: this.Categorie.dateCreate,
  //      name: this.CategorieForm.value.name ?? '',
  //      description: this.CategorieForm.value.description ?? '',
      
  //    };
  //    this.CategorieService.update(this.Categorie.id,updatedCategorie)
  //    .subscribe(() => 
  //    alert("Categorie modifié avec succès.")
  //    );
  //    }
  //    annuler(){
  //     this.router.navigateByUrl('/gestion-categorie');     }
  //   }