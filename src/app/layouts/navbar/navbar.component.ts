import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categorie } from 'src/app/core/models/categorie.model';
import { CategorieService } from 'src/app/core/services/categorie.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  categ:string='';
  data:Categorie[] =[];
  constructor(private dataCategorie: CategorieService, private router: Router) { }
  
  ngOnInit() {
    this.dataCategorie.getCategories()
    .subscribe((allData: Categorie[]) => {
      this.data = allData;
      console.log(this.data); 
    });
  }
//   update(x:string){
// this.categ=x;
//   this.router.navigate(['.', { parametre: this.categ }], { relativeTo: this.route });

//   }
public navigateToSection(section: string) {
  // this.router.navigate(["/"]);
  window.location.hash = '';
  window.location.hash = section;
}
}
