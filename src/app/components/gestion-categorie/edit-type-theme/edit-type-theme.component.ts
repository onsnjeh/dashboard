import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Theme, Type } from 'src/app/core/models/categorie.model';
import { CategorieService } from 'src/app/core/services/categorie.service';

@Component({
  selector: 'app-edit-type-theme',
  templateUrl: './edit-type-theme.component.html',
  styleUrls: ['./edit-type-theme.component.scss']
})
export class EditTypeThemeComponent implements OnInit {
  categorieId!: number;
  types!: Type;
  themes!: Theme;
  typeForm = this.formBuilder.group({
    name: ['', Validators.required],
    categorieName: ['', Validators.required]
  });
  themeForm = this.formBuilder.group({
    name: ['', Validators.required],
    categorieName: ['', Validators.required]
  });

  constructor(
    private route: ActivatedRoute,
    private categorieService: CategorieService,
    private formBuilder: FormBuilder,
    private router:Router
  ) {}

  ngOnInit(): void {
    this.categorieId = Number(this.route.snapshot.paramMap.get('id'));
    this.categorieService.getTypeBycategorieId(this.categorieId).subscribe((types) => {
      this.types = types;
    });
    this.categorieService.getThemeBycategorieId(this.categorieId).subscribe((themes) => {
      this.themes = themes;
    });
  }

  // onSubmit(): void {
  //   const updatedType: Type = {
  //     id: 0,
  //     name: this.typeForm.value.name ?? '',
     
  //   };
  //   this.categorieService.updateType(this.categorieId, updatedType).subscribe(() => {
  //     console.log('Types updated');
  //   });
  //   const updatedTheme: Theme = {
  //     id: 0,
  //     name: this.themeForm.value.name ?? '',
     
  //   };
  //   this.categorieService.updateTheme(this.categorieId, updatedTheme).subscribe(() => {
  //     console.log('Themes updated');
  //   });
  // }
  //    annuler(): void {
  //    this.router.navigate(['/gestion-categorie']);
  //  }
}
