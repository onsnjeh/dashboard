import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Offre } from 'src/app/core/models/offre.model';
import { OffreService } from 'src/app/core/services/offre.service';

@Component({
  selector: 'app-detail-offre',
  templateUrl: './detail-offre.component.html',
  styleUrls: ['./detail-offre.component.scss']
})
export class DetailOffreComponent implements OnInit {

  offre!: Offre;

  constructor(
    private route: ActivatedRoute,
    private offreService: OffreService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.offreService.getById(Number(id)).subscribe(offre => this.offre = offre);
    }
  }

  annuler(): void {
    this.router.navigate(['/gestion-offre']);
  }
}