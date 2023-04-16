import { Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Categorie, Theme, Type } from 'src/app/core/models/categorie.model';
import { CategorieService } from 'src/app/core/services/categorie.service';



@Component({
  selector: 'app-gestion-categorie',
  templateUrl: './gestion-categorie.component.html',
  styleUrls: ['./gestion-categorie.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class GestionCategorieComponent {
  item1: Categorie[] = [];
  
  closeResult: string='';

  constructor(
    private service: CategorieService, private route: ActivatedRoute
  ) { }
 
  ngOnInit() {
    
    this.GetCategorie();
  }
  
  GetCategorie() {
    this.service.getCategories().subscribe((allData) => {
      this.item1 = allData;
      console.log(this.item1);
 
    });}
  
//delete 
deleteCategorie(id: number): void {
  this.service.deleteCategorie(id)
  .subscribe(() => {
  this.item1 = this.item1.filter(categorie => categorie.id !== id);
  });
  alert("catégorie supprimée avec succès")

  }
  

}