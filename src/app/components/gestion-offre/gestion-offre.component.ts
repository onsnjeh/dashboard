import { Component } from '@angular/core';
import { Offre } from 'src/app/core/models/offre.model';
import { OffreService} from 'src/app/core/services/offre.service';


@Component({
  selector: 'app-gestion-offre',
  templateUrl: './gestion-offre.component.html',
  styleUrls: ['./gestion-offre.component.css']
})
export class GestionOffreComponent {
  
  offres: Offre[] = []; // Les offres affichés
  page = 1; // La page courante
  pageSize = 5; // Nombre de offres par page

  constructor(private offreService: OffreService) { }

  ngOnInit() {
    this.loadoffres();
  }

  // Charge les offres depuis le serveur
  loadoffres() {
    this.offreService.getOffre().subscribe(offres => {
      this.offres = offres;
    });
  }

  // Retourne les offres à afficher pour la page courante
  get offresToShow(): Offre[] {
    const startIndex = (this.page - 1) * this.pageSize;
    return this.offres.slice(startIndex, startIndex + this.pageSize);
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
    return Math.ceil(this.offres.length / this.pageSize);
  }

  //supprimer offre 
deleteOffre(offre:Offre): void {
  this.offreService.delete(offre.id)
    .subscribe(() => {
      alert('Offre supprimé !');
      this. offres = this. offres.filter(o => o !== offre);
    });
}
}
