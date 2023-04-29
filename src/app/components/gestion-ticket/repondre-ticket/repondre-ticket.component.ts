import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
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
export class RepondreTicketComponent implements OnInit {
  ticket!: Ticket ;
  assignee!: string 
  ticketForm!: FormGroup 
  comptes: Compte[] = []; // Les comptes affichés
  priorite!: string 

  isResponseVisible = false;
  responseText = '';
  responseFile: File | undefined 

  constructor(
    private route: ActivatedRoute,
    private ticketService: TicketService,
    private dataService: CompteService,
    private location: Location
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.ticketService.updateTicketStatus(id, 'En attente').subscribe();
    this.ticketService.updateTicketStatus(id, 'Repondu').subscribe();    
    this.ticketService.getById(id).subscribe((ticket) => (this.ticket = ticket));

    this.dataService.getItemsByRole('expert').subscribe((comptes: Compte[]) => {
      this.comptes = comptes;
    });
  }
//affecter tickect 
  onAssign() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (this.assignee) {
      this.ticketService.assignTicket(id, this.assignee).subscribe((ticket) => {this.ticket = ticket
        alert('Ticket affecté par : ' + this.assignee);},
        (err) => {
          alert('Error submitting ticket affecté');
        }
      );
    }}
//repondre ticket
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
      dateRepondre:new Date,
      status: 'Repondu',
      responseText: this.responseText || this.ticket?.responseText,
      responseFile: this.responseFile || this.ticket?.responseFile
    };
    this.ticketService.update(ticketId, updatedTicket, formData).subscribe(() => {
      this.toggleResponse();
      this.responseText = '';
      this.responseFile = undefined;
      this.ticket = updatedTicket;
      alert('Ticket response submitted successfully');
    }, err => {
      alert('Error submitting ticket response');
    });
  }
  

  //ferme ticket
  fermerTicket(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    const updatedTicket: Ticket = {
      ...this.ticket!,
      status: 'Fermer',
      dateFermer: new Date()
    };
    this.ticketService.updateTicket(id, updatedTicket).subscribe(
      () => {
        this.ticket = updatedTicket;
        alert('Ticket fermé avec succès');
      },
      (err) => {
        alert('Erreur lors de la mise à jour de la date de fermeture');
      }
    );
  }
//modifier Priorite
  MofidierPriorite(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (this.priorite) {
      this.ticketService.updateTicketPriorite(Number(id), this.priorite).subscribe
  (ticket => this.ticket = ticket);
}
}
//annuler 
annuler ()
{ 
     this.location.back();
}
}