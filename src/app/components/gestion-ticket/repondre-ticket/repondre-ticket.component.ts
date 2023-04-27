import { Component} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Compte } from 'src/app/core/models/compte.model';
import { Ticket } from 'src/app/core/models/ticket.model';
import { CompteService } from 'src/app/core/services/compte.service';
import { TicketService } from 'src/app/core/services/ticket.service';

@Component({
  selector: 'app-repondre-ticket',
  templateUrl: './repondre-ticket.component.html',
  styleUrls: ['./repondre-ticket.component.css']
})
export class RepondreTicketComponent {
  ticket!: Ticket;
  assignee!: string;
  ticketForm!: FormGroup;
  comptes: Compte[] = []; // Les comptes affichés
  priorite!: string;


  constructor(
    private route: ActivatedRoute,
    private ticketService: TicketService,
    private dataService: CompteService  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.ticketService.updateTicketStatus(Number(id), 'En attente').subscribe();
    this.ticketService.getById(Number(id)).subscribe(ticket => this.ticket = ticket);
  
      this.dataService.getItemsByRole('expert').subscribe((comptes: Compte[]) => {
        this.comptes = comptes;
      });
  }
  onAssign(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.ticketService.assignTicket(Number(id), this.assignee).subscribe(ticket => this.ticket = ticket);
  
  }
  isResponseVisible = false;
  responseText: string='';
  responseFile: File | undefined;

  //repondre sur un ticket 
  toggleResponse(): void {
    this.isResponseVisible = !this.isResponseVisible;
  }

  submitResponse(): void {
    const ticketId = this.ticket?.id ?? 0;
    const formData = new FormData();
    if (this.responseText) {
      formData.append('responseText', this.responseText);
    }
    if (this.responseFile) {
      formData.append('responseFile', this.responseFile);
    }
    const updatedTicket: Ticket = {
      ...this.ticket,
      status: 'Repondu',
      responses: this.ticket.responses ? [...this.ticket.responses, this.responseText,this.responseFile]
       : [this.responseText,this.responseFile]
    };
    this.ticketService.update(ticketId, updatedTicket, formData).subscribe(() => {
      this.toggleResponse();
      this.responseText = '';
      this.responseFile = undefined;
      this.ticket = updatedTicket;
      alert('Ticket response  successfully');
    }, err => {
      alert('Error submitting ticket response' );
    });
}

//fermer un ticket
fermerTicket(): void {
  const id = this.route.snapshot.paramMap.get('id');
  const updatedTicket: Ticket = {
    ...this.ticket,
    status:"Fermer",
    dateFermer: new Date()
  };
    this.ticketService.updateTicket(Number(id), updatedTicket).subscribe(() => {
      this.ticket = updatedTicket;
      alert('Ticket fermé avec succès');
    }, err => {
      alert('Erreur lors de la mise à jour de la date de fermeture');
    });
  }
  
//modifier Priorite 
Mofidier(): void {
  const id = this.route.snapshot.paramMap.get('id');
  this.ticketService.updateTicketPriorite(Number(id), this.priorite).subscribe
  (ticket => this.ticket = ticket);
}
}