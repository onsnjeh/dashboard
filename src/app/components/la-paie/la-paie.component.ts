import { Component, OnInit } from '@angular/core';
import { Compte } from 'src/app/core/models/compte.model';
import { Ticket } from 'src/app/core/models/ticket.model';
import { CompteService } from 'src/app/core/services/compte.service';
import { TicketService } from 'src/app/core/services/ticket.service';

@Component({
  selector: 'app-la-paie',
  templateUrl: './la-paie.component.html',
  styleUrls: ['./la-paie.component.scss']
})
export class LaPaieComponent implements OnInit {
  tickets: Ticket[] = [];
  experts: Compte[] = [];
  selectedExpert: string = '';

  constructor(private ticketService: TicketService, private compteService: CompteService) { }

  ngOnInit() {
    this.ticketService.getTickets().subscribe((tickets) => {
      this.tickets = tickets;
      this.filterTickets();
    });

    this.compteService.getItemsByRole('expert').subscribe((experts) => {
      this.experts = experts;
      this.filterTickets();
    });
  }

  onExpertSelected(event: any) {
    this.selectedExpert = event.target.value;
    this.filterTickets();
  }

  private filterTickets() {
    if (this.experts.length > 0 && this.selectedExpert !== '') {
      this.tickets = this.tickets.filter((t:Ticket) => t.assignee === this.selectedExpert);
    }
  }
}
