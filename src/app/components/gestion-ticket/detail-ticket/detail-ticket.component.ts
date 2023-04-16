import { Component} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Compte } from 'src/app/core/models/compte.model';
import { Ticket } from 'src/app/core/models/ticket.model';
import { CompteService } from 'src/app/core/services/compte.service';
import { TicketService } from 'src/app/core/services/ticket.service';

@Component({
  selector: 'app-detail-ticket',
  templateUrl: './detail-ticket.component.html',
  styleUrls: ['./detail-ticket.component.css']
})
export class DetailTicketComponent {
  ticket!: Ticket;
  assignee!: string;
  ticketForm!: FormGroup;
  comptes: Compte[] = []; // Les comptes affichés

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
    this.ticketService.assignTicket(Number(id), this. assignee).subscribe(ticket => this.ticket = ticket);
    // this.ticketService.sendNotificationEmail(this.ticket).subscribe(() => {
    //   console.log('Notification email sent.')
    // });
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
//fermer un ticket
fermerTicket(): void {
  const id = this.route.snapshot.paramMap.get('id');
  const updatedTicket: Ticket = {
    ...this.ticket,
    dateFermer: new Date().toISOString()
  };
  this.ticketService.updateTicketStatus(Number(id), 'Fermer').subscribe(() => {
    this.ticketService.updateTicket(Number(id), updatedTicket).subscribe(() => {
      this.ticket = updatedTicket;
      alert('Ticket fermé avec succès');
    }, err => {
      alert('Erreur lors de la mise à jour de la date de fermeture');
    });
  }, err => {
    alert('Erreur lors de la mise à jour du statut du ticket');
  });
  
}
  //par email  recipientEmail: string;
  // sendEmail() {
  //   const msg = {
  //     to: 'karraynesrin97@gmail.com',
  //     from: 'onsnjeh2020@gmail.com',
  //     subject: 'Test email',
  //     text: 'Hello World!'
  //   };
  //   sgMail.send(msg).then(() => {
  //     console.log('Email sent');
  //   }).catch((error) => {
  //     console.error(error);
  //   });
  // }
}