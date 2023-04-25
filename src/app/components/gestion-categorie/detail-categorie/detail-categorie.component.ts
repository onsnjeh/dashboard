import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { Categorie, Theme, Type } from 'src/app/core/models/categorie.model';
import { CategorieService } from 'src/app/core/services/categorie.service';

@Component({
  selector: 'app-detail-categorie',
  templateUrl: './detail-categorie.component.html',
  styleUrls: ['./detail-categorie.component.scss']
})
export class DetailCategorieComponent implements OnInit {
  categorie!: Categorie;
  types!: Type[];
  themes!: Theme[];

  constructor(private CategorieService:  CategorieService, private route: ActivatedRoute,
    private router : Router) { }

  ngOnInit() {
    // récupérer l'ID de la catégorie depuis l'URL
    const id = Number(this.route.snapshot.paramMap.get('id'));

    // récupérer la catégorie, les types et les thèmes en parallèle avec forkJoin
    forkJoin([
      this.CategorieService.getById(id),
      this.CategorieService.getTypeBycategorieId(id),
      this.CategorieService.getThemeBycategorieId(id)
    ]).subscribe(([categorie, types, themes]) => {
      this.categorie = categorie;
      this.types = types;
      this.themes = themes;
    });
  }
  annuler(): void {
    this.router.navigate(['/gestion-categorie']);
  }
}