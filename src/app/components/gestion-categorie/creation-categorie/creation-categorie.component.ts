import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Categorie } from 'src/app/core/models/categorie.model';
import { CategorieService } from 'src/app/core/services/categorie.service';

@Component({
  selector: 'app-creation-categorie',
  templateUrl: './creation-categorie.component.html',
  styleUrls: ['./creation-categorie.component.css']
})
export class CreationCategorieComponent {
  closeResult: string='';
 
  CategorieForm!: FormGroup;


  constructor( private modalService: NgbModal,
    private CategorieService: CategorieService,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.CategorieForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
   


  });
  }
  selectedFile!: File ;

  onSubmit() {
   
		const Categorie: Categorie = {
      id: 0,
      ...this.CategorieForm.value,
      dateCreate: new Date(),
    };

		this.CategorieService.create(Categorie).subscribe();
		this.CategorieForm.reset();
		alert('Le Categorie a été créé avec succès');

		// this.toastr.success("Le ticket a été créé avec succès.")

	}
  openModalDialogCustomClass(content:any) {
		this.modalService.open(content, {size: 'lg' });
	}

}
