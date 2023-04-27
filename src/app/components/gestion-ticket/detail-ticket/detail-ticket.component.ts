import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ticket } from 'src/app/core/models/ticket.model';
import { TicketService } from 'src/app/core/services/ticket.service';

@Component({
  selector: 'app-detail-ticket',
  templateUrl: './detail-ticket.component.html',
  styleUrls: ['./detail-ticket.component.scss']
})
export class DetailTicketComponent implements OnInit {

  

  Ticket!: Ticket;

  constructor(
    private route: ActivatedRoute,
    private TicketService: TicketService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.TicketService.getById(Number(id)).subscribe(Ticket => this.Ticket = Ticket);
    }
  }

  annuler(): void {
    this.router.navigate(['/gestion-ticket']);
  }
}