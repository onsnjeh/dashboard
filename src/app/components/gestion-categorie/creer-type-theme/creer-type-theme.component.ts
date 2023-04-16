import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Categorie, Theme , Type} from 'src/app/core/models/categorie.model';
import { CategorieService } from 'src/app/core/services/categorie.service';

@Component({
  selector: 'app-creer-type-theme',
  templateUrl: './creer-type-theme.component.html',
  styleUrls: ['./creer-type-theme.component.css']
})
export class CreerTypeThemeComponent {

  categories: Categorie[] = [];
  typeThemeForm!: FormGroup;
  
  constructor(
  private categorieService: CategorieService,
  private formBuilder: FormBuilder,
  private router: Router) { }
  
  ngOnInit(): void {
  this.categorieService.getCategories().subscribe(
  (categories) => {
  this.categories = categories;
  },
  (error) => {
  console.error('Erreur lors du chargement des catégories', error);
  }
  );
  this.typeThemeForm = this.formBuilder.group({
    categorieName: ['', Validators.required],
    theme: ['', Validators.required],
    type: ['', Validators.required]
  });
  } 
  //create type et theme 
  onSubmit() {
    const formValues = this.typeThemeForm.value;
    const selectedCategorie = this.categories.find(
      (categorie) => categorie.name === formValues.categorieName
    );
    if (!selectedCategorie) {
      alert('Please select a valid category.');
      return;
    }

    const newType: Type = {
      name: formValues.type,
      categorieId: selectedCategorie.id,
      categorieName: selectedCategorie.name,
      id: 0
    };
    const newTheme: Theme = {
      name: formValues.theme,
      categorieId: selectedCategorie.id,
      categorieName: selectedCategorie.name,
      id:0
    };

    this.categorieService.createType(newType).subscribe(
      (response) => {
        console.log('Type added successfully');
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );

    this.categorieService.createTheme(newType).subscribe(
      (response) => {
        console.log('Theme added successfully');
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
alert("Type et Theme ajoute avec succès")
this.router.navigate(['/gestion-categorie'])
    this.typeThemeForm.reset();
  }
}