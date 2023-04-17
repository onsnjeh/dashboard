import { Component } from '@angular/core';
import { Compte } from 'src/app/core/models/compte.model';
import { CompteService } from 'src/app/core/services/compte.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-gestion-manager-expert',
  templateUrl: './gestion-manager-expert.component.html',
  styleUrls: ['./gestion-manager-expert.component.css']
})
export class GestionManagerExpertComponent {
  comptes: Compte[] = []; // Les comptes affichés
  managerComptes: Compte[] = []; // Les comptes affichés manager
  expertComptes: Compte[] = []; // Les comptes affichés expert
  selectedRole: string = 'manager'; // The default value of the role filter


  page = 1; // La page courante
  pageSize = 5; // Nombre de comptes par page

  constructor(private compteService: CompteService) { }

  ngOnInit(): void {
    forkJoin([
      this.compteService.getItemsByRole('manager'),
      this.compteService.getItemsByRole('expert')
    ]).subscribe(([managerComptes, expertComptes]) => {
      this.managerComptes = managerComptes;
      this.expertComptes = expertComptes;
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
