import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Partenaire } from 'src/app/core/models/partenaire.model';
import { PartenairesService } from 'src/app/core/services/partenaires.service';

@Component({
  selector: 'app-gestion-partenaires',
  templateUrl: './gestion-partenaires.component.html',
  styleUrls: ['./gestion-partenaires.component.css']
})
export class GestionPartenairesComponent implements OnInit {
  partenaires: Partenaire[]=[]
  imageUrl!: string;


  constructor( private partenairesService: PartenairesService) { }

  ngOnInit(): void {
      
      this.partenairesService.getPartenaire().subscribe(data => {
        this.partenaires = data;
        
      });
}
//supprimer partenaire 
deletePartenaire(partner: Partenaire): void {
  this.partenairesService.delete(partner.id)
    .subscribe(() => {
      alert('Partenaire supprimé !');
      this.partenaires = this.partenaires.filter(p => p !== partner);
    });
}
}