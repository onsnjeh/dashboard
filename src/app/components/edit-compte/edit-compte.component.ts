import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Compte } from 'src/app/core/models/compte.model';
import { CompteService } from 'src/app/core/services/compte.service';

@Component({
  selector: 'app-edit-compte',
  templateUrl: './edit-compte.component.html',
  styleUrls: ['./edit-compte.component.scss']
})
export class EditCompteComponent implements OnInit {

  Compte!: Compte;
  CompteForm = this.formBuilder.group({
    nom: ['', Validators.required],
    prenom: ['', Validators.required],
    email: ['', Validators.required],
    role: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private CompteService: CompteService,
    private router: Router
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.CompteService.getById(Number(id))
      .subscribe(Compte => {
        if (Compte) { // add null check here
          this.Compte = Compte;
          this.CompteForm.setValue({
            nom: Compte.nom,
            prenom: Compte.prenom,
            email: Compte.email,
            role: Compte.role,
            password: Compte.password,

          });
        }
      });
  }

  annuler(): void {
    this.router.navigate(['/home']);
  }
  onSubmit() {
    const updatedCompte: Compte = {
      id: this.Compte.id,
      nom: this.CompteForm.value.nom ?? '',
      prenom: this.CompteForm.value.prenom ?? '',
      email: this.CompteForm.value.email ?? '',
      role: this.CompteForm.value.role ?? '',
      password: this.CompteForm.value.password ?? '',

    };
    this.CompteService.update(this.Compte.id, updatedCompte)
      .subscribe(() => this.router.navigateByUrl('/home'));
    alert("Compte modifié avec succès.")
  }

}
