import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Offre } from 'src/app/core/models/offre.model';
import { OffreService } from 'src/app/core/services/offre.service';

@Component({
  selector: 'app-creer-offre',
  templateUrl: './creer-offre.component.html',
  styleUrls: ['./creer-offre.component.css']
})
export class CreerOffreComponent implements OnInit {

  offreForm!: FormGroup;


  constructor( 
    private offreService: OffreService,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.offreForm = this.fb.group({
      titre: ['', Validators.required],
      periode: ['', Validators.required],
      prix: ['', Validators.required],
      description: ['', Validators.required],
      dateDebut: ['', Validators.required],
      dateFin: ['', Validators.required],


  });
  }
  selectedFile!: File ;

  onSubmit() {
   
		const offre: Offre = {
      id: 0,
      ...this.offreForm.value,
      dateCreate: new Date(),
    };

		this.offreService.create(offre).subscribe();
		this.offreForm.reset();
		alert('Le offre a été créé avec succès');

		// this.toastr.success("Le ticket a été créé avec succès.")

	}





}
