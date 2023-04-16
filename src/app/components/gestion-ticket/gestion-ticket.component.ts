import { Component, OnInit } from "@angular/core";
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
  
    constructor(private ticketService: TicketService) { }
  
    ngOnInit() {
      this.loadTickets();
    }
  
    // Charge les tickets depuis le serveur
    loadTickets() {
      this.ticketService.getTickets().subscribe(tickets => {
        this.tickets = tickets;
      });
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
  