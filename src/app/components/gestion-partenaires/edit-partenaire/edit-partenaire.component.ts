import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Partenaire } from 'src/app/core/models/partenaire.model';
import { PartenairesService } from 'src/app/core/services/partenaires.service';

@Component({
  selector: 'app-edit-partenaire',
  templateUrl: './edit-partenaire.component.html',
  styleUrls: ['./edit-partenaire.component.scss']
})
export class EditPartenaireComponent implements OnInit {
 Partenaire!:Partenaire;
 PartenaireForm = this.formBuilder.group({
    nom: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    telephone: ['', Validators.required],
    image: ['', Validators.required]
  });

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private PartenaireService:PartenairesService,
    private router: Router
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
  this.PartenaireService.getById(Number(id))
    .subscribe(Partenaire => {
      if (Partenaire) { // add null check here
        this.Partenaire = Partenaire;
        this.PartenaireForm.setValue({
          nom: Partenaire.nom,
          email: Partenaire.email,
          telephone: Partenaire.telephone,
          image: Partenaire.image
        });
      }
    });
  }

  annuler(): void {
    this.router.navigate(['/gestion-partenaires']);
  }
  onSubmit() {
    const updatedPartenaire: Partenaire = {
      id: this.Partenaire.id,
      dateCreate: this.Partenaire.dateCreate,
      nom: this.PartenaireForm.value.nom ?? '',
      email: this.PartenaireForm.value.email ?? '',
      telephone: this.PartenaireForm.value.telephone ?? '',
      image: this.PartenaireForm.value.image ?? ''
    };
    this.PartenaireService.update(this.Partenaire.id,updatedPartenaire)
    .subscribe(() => this.router.navigateByUrl('/gestion-partenaires'));
    alert("Partenaire modifié avec succès.")
    }
    }