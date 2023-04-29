import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Compte } from 'src/app/core/models/compte.model';
import { CompteService } from 'src/app/core/services/compte.service';

@Component({
  selector: 'app-ajouter-compte',
  templateUrl: './ajouter-compte.component.html',
  styleUrls: ['./ajouter-compte.component.scss']
})
export class AjouterCompteComponent implements OnInit {

  compteForm!: FormGroup;


  constructor(
    private compteService: CompteService,
    private fb: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {
    this.compteForm = this.fb.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      email: ['', Validators.required],
      role: ['', Validators.required],
      password: ['', Validators.required],


    });
  }
  selectedFile!: File;

  onSubmit() {

    const compte: Compte = {
      id: 0,
      ...this.compteForm.value,
      dateCreate: new Date(),
    };

    this.compteService.create(compte).subscribe();
    this.compteForm.reset();
    alert('Le compte a été créé avec succès');
    this.router.navigate(['/gestion-manager-experte'])

    // this.toastr.success("Le ticket a été créé avec succès.")

  }
  annuler(){
    this.router.navigate(['/gestion-manager-experte'])

  }




}