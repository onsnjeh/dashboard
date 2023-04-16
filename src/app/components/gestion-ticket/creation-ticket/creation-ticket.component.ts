import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Categorie } from 'src/app/core/models/categorie.model';
import { Ticket } from 'src/app/core/models/ticket.model';
import { CategorieService } from 'src/app/core/services/categorie.service';
import { TicketService } from 'src/app/core/services/ticket.service';



@Component({
	selector: 'app-creation-ticket',
	templateUrl: './creation-ticket.component.html',
	styleUrls: ['./creation-ticket.component.css'],
	styles: [
		`
			.star {
				font-size: 1.5rem;
				padding-right: 0.1rem;
				color: black;
			}
			.filled {
				color:red ;
			}
			.low {
				color: #fcc948;
			}
			.filled.low {
				color:  #ffde8a;
			}
		`,
	],
})
export class CreationTicketComponent {
	currentRate = 0;
	listCategory: Categorie[] = [];
	ticketForm!: FormGroup;

	constructor(
			private categorieService: CategorieService,
			private ticketService: TicketService,
			private fb: FormBuilder,
			// private toastr: ToastrService
	) {}

	ngOnInit(): void {
			this.categorieService.getCategories().subscribe(
					(categories) => {
							this.listCategory = categories;
					},
					(error) => {
							console.error('Erreur lors du chargement des catégories', error);
					}
			);
			
			this.ticketForm = this.fb.group({
				categorie: ['', Validators.required],
				priorite: ['', Validators.required],
				question: ['', Validators.required],
				fichier: [[]],
		});
	}

	// création ticket
	onSubmit() {
		const ticket: Ticket = {
				id: 0, // id will be generated by json-server
				...this.ticketForm.value,
				priorite: this.currentRate,
				status: 'initial',
								date:new Date()
		};
		this.ticketService.create(ticket).subscribe();
		this.ticketForm.reset();
		alert('Le ticket a été créé avec succès');
		// this.toastr.success("Le ticket a été créé avec succès.")

	}
}
