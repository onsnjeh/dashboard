import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Compte } from 'src/app/core/models/compte.model';
import { CompteService } from 'src/app/core/services/compte.service';

@Component({
  selector: 'app-detail-compte',
  templateUrl: './detail-compte.component.html',
  styleUrls: ['./detail-compte.component.scss']
})
export class DetailCompteComponent implements OnInit {


  Compte!: Compte;

  constructor(
    private route: ActivatedRoute,
    private CompteService: CompteService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.CompteService.getById(Number(id)).subscribe(Compte => this.Compte = Compte);
    }
  }

  annuler(): void {
    this.router.navigate(['/home']);
  }
}