import { Component, OnInit } from '@angular/core';
import { Compte } from 'src/app/core/models/compte.model';
import { CompteService } from 'src/app/core/services/compte.service';


@Component({
  selector: 'app-gestion-client',
  templateUrl: './gestion-client.component.html',
  styleUrls: ['./gestion-client.component.css']
})
export class GestionClientComponent implements OnInit {
  comptes: Compte[] = []; // Les comptes affichés
  page = 1; // La page courante
  pageSize = 5; // Nombre de comptes par page

  constructor(private compteService: CompteService) { }

  ngOnInit(): void {
    this.compteService.getItemsByRole('client').subscribe(comptes => {
      this.comptes = comptes;
    });
  }

  // Retourne les comptes à afficher pour la page courante
  get comptesToShow(): Compte[] {
    const startIndex = (this.page - 1) * this.pageSize;
    return this.comptes.slice(startIndex, startIndex + this.pageSize);
  }

  // Passe à la page suivante
  nextPage() {
    if (this.page < this.pageCount) {
      this.page++;
    }
  }

  // Passe à la page précédente
  prevPage() {
    if (this.page > 1) {
      this.page--;
    }
  }

  // Retourne le nombre total de pages
  get pageCount(): number {
    return Math.ceil(this.comptes.length / this.pageSize);
  }

  //delete 
  deleteCompte(comptes:Compte): void {
    this.compteService.delete(comptes.id)
      .subscribe(() => {
        alert('Compte supprimé !');
        this. comptes = this. comptes.filter(c => c !== comptes);
      });
  }
}
