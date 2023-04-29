import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Partenaire } from 'src/app/core/models/partenaire.model';
import { PartenairesService } from 'src/app/core/services/partenaires.service';

@Component({
  selector: 'app-ajouter-partenaires',
  templateUrl: './ajouter-partenaires.component.html',
  styleUrls: ['./ajouter-partenaires.component.css']
})
export class AjouterPartenairesComponent implements OnInit {

  partenaireForm!: FormGroup;


  constructor( private modalService: NgbModal,
    private partenaireService: PartenairesService,
    private fb: FormBuilder,
    private router:Router) { }

  ngOnInit(): void {
    this.partenaireForm = this.fb.group({
      nom: ['', Validators.required],
      email: ['', Validators.required],
      telephone: ['', Validators.required],
      url: ['', Validators.required],
      image: ['', Validators.required],


  });
  }
  selectedFile!: File ;

  onSubmit() {
   
		const partenaire: Partenaire = {
      id: 0,
      ...this.partenaireForm.value,
      dateCreate: new Date(),
    };

		this.partenaireService.create(partenaire).subscribe();
		this.partenaireForm.reset();
		alert('Le partenaire a été créé avec succès');

		// this.toastr.success("Le ticket a été créé avec succès.")

	}
  openModalDialogCustomClass(content:any) {
		this.modalService.open(content, {size: 'lg' });
	}

  annuler(){
    this.router.navigateByUrl('/gestion-partenaires')

  }





}
