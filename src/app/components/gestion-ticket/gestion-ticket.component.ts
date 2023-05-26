import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Ticket } from "src/app/core/models/ticket.model";
import { TicketService } from "src/app/core/services/ticket.service";



@Component({
  selector: 'app-gestion-ticket',
  templateUrl: './gestion-ticket.component.html',
  styleUrls: ['./gestion-ticket.component.css']
})
export class GestionTicketComponent implements OnInit{

    tickets: Ticket[] = []; // Les tickets affichés
    page = 1; // La page courante
    pageSize = 5; // Nombre de tickets par page

    constructor(private ticketService: TicketService,
      private route: ActivatedRoute,
      ) { }
  
    ngOnInit() {
      this.loadTickets();
      this.search(''); // appel initial sans terme de recherche

    }
  
    // Charge les tickets depuis le serveur
    loadTickets() {
      this.ticketService.getTickets().subscribe(tickets => {
        this.tickets = tickets;
      });
    }
  
    search(searchTerm: string) {
      this.ticketService.searchTickets(searchTerm).subscribe(
        tickets => this.tickets = tickets,
        error => console.log(error)
      );
    }
  
    onSearch(searchTerm: string) {
      this.search(searchTerm);
    }
  
    onClear() {
      this.search('');
    }
//fermer

fermerTicket(ticket: Ticket) {
  const updatedTicket: Ticket = {
    ...ticket,
    status: 'Fermer',
    dateFermer: new Date()
  };

  this.ticketService.updateTicket(ticket.id, updatedTicket).subscribe(
    () => {
      const ticketIndex = this.tickets.findIndex(t => t.id === ticket.id);
      if (ticketIndex !== -1) {
        this.tickets[ticketIndex] = updatedTicket;
        alert('Ticket fermé avec succès');
      }
    },
    error => {
      console.log(error);
      alert('Erreur lors de la fermeture du ticket');
    }
  );
}
    // Retourne les tickets à afficher pour la page courante
    get ticketsToShow(): Ticket[] {
      const startIndex = (this.page - 1) * this.pageSize;
      return this.tickets.slice(startIndex, startIndex + this.pageSize);
    }
  
    // Passe à la page suivante
    nextPage() {
      if (this.page < this.pageCount) {
        this.page++;
      }
    }
  
    // Passe à la page précédente
    prevPage() {
      if (this.page > 1) {
        this.page--;
      }
    }
  
    // Retourne le nombre total de pages
    get pageCount(): number {
      return Math.ceil(this.tickets.length / this.pageSize);
    }
  }
  