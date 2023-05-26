import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { Compte } from 'src/app/core/models/compte.model';
import { FichePaie } from 'src/app/core/models/fichedepaie.model';
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
  fichePaieAmount: number = 0;
  fichePaie: FichePaie | undefined;
  constructor(private ticketService: TicketService, private compteService: CompteService) { }
  calculateFichePaie() {
    const selectedExpert = this.experts.find((expert) => expert.nom === this.selectedExpert);
    if (selectedExpert) {
      const ticketCount = this.tickets.length;
      const fichePaie: FichePaie = {
        id: 0,
        expertId: selectedExpert.id,
        expertName: selectedExpert.nom,
        ticketCount: ticketCount,
        payrollAmount: this.fichePaieAmount
      };
      this.compteService.createFichePaie(fichePaie).subscribe((createdFichePaie) => {
        this.fichePaie = createdFichePaie;
      });
    }
  }
  ngOnInit() {
    this.ticketService.getTickets().pipe(
      map(tickets => tickets.filter((t:Ticket) => t.assignee === this.selectedExpert))
    ).subscribe((filteredTickets) => {
      this.tickets = filteredTickets;
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
    if (this.experts.length > 0) {
      if (this.selectedExpert !== '') {
        // si un expert est sélectionné, filtrer les tickets en fonction de l'expert
        this.ticketService.getTickets().pipe(
          map(tickets => tickets.filter((t:Ticket) => t.assignee === this.selectedExpert))
        ).subscribe((filteredTickets) => {
          this.tickets = filteredTickets;
        });
      } else {
        // si aucun expert n'est sélectionné, afficher tous les tickets
        this.ticketService.getTickets().subscribe((tickets) => {
          this.tickets = tickets;
        });
      }
    }
  }
}
