import { Component } from "@angular/core";
import { Ticket } from "src/app/core/models/ticket.model";
import { TicketService } from "src/app/core/services/ticket.service";


@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent {
  item2: Ticket[] = [];
 

  constructor(
    private service: TicketService
  ) { }
 
  ngOnInit() {
  
    this.GetTicket();
  }
  
  GetTicket() {
      this.service.getTickets().subscribe(item2 => {
        // Triez les tickets par date de création décroissante
        item2.sort((a, b) => new Date(b.dateCreate).getTime() - new Date(a.dateCreate).getTime());
  
        // Récupérez les 5 premiers tickets
        this.item2 = item2.slice(0, 5);
      });
    
  }
  


}
