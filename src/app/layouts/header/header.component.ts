import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Observable, map, shareReplay } from 'rxjs';
import { Ticket } from 'src/app/core/models/ticket.model';
import { TicketService } from 'src/app/core/services/ticket.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  TicketCount = 0;
  Tickets: Ticket[] = [];
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );


  constructor(private ticketService: TicketService,
    private breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
    this.getInitialTickets();
  }

  getInitialTickets() {
    this.ticketService.getTickets().subscribe((tickets) => {
      this.TicketCount = tickets.filter((ticket) => ticket.status === 'initial' || ticket.status === 'En attente' || ticket.status === 'Repondu').length;
      this.Tickets = tickets.filter((ticket) => ticket.status === 'initial'|| ticket.status === 'En attente' || ticket.status === 'Repondu');
      console.log(this.Tickets);
    });
  }

}
  // this.notificationCount = tickets.filter((ticket) => ticket.status === 'En attente').length;
      // this.initialTickets = tickets.filter((ticket) => ticket.status === 'En attente');


