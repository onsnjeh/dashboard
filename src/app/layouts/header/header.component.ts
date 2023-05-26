import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Observable, map, shareReplay } from 'rxjs';
import { Compte } from 'src/app/core/models/compte.model';
import { Ticket } from 'src/app/core/models/ticket.model';
import { CompteService } from 'src/app/core/services/compte.service';
import { TicketService } from 'src/app/core/services/ticket.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  TicketCount = 0;
  Tickets: Ticket[] = [];

  currentUser!: Compte;


  constructor(private ticketService: TicketService,
    private authService: CompteService
    ) {}

  ngOnInit() {
    this.getInitialTickets();
    this.currentUser = this.authService.getCurrentCompte();

  }
  logout() {
    this.authService.logout();
  }
  getInitialTickets() {
    this.ticketService.getTickets().subscribe((tickets) => {
      this.TicketCount = tickets.filter((ticket) => ticket.status === 'initial' || ticket.status === 'En attente' || ticket.status === 'Repondu' || ticket.status === 'Fermer').length;
      this.Tickets = tickets.filter((ticket) => ticket.status === 'initial'|| ticket.status === 'En attente' || ticket.status === 'Repondu' || ticket.status === 'Fermer');
      console.log(this.Tickets);
    });
  }

}
  // this.notificationCount = tickets.filter((ticket) => ticket.status === 'En attente').length;
      // this.initialTickets = tickets.filter((ticket) => ticket.status === 'En attente');


