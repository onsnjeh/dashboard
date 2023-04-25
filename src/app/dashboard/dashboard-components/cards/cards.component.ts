import { Component, OnInit } from '@angular/core';
import { Ticket } from 'src/app/core/models/ticket.model';
import { ArticleService } from 'src/app/core/services/article.service';
import { TicketService } from 'src/app/core/services/ticket.service';

interface cards {
  image: string;
  btn: string;
}

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
})
export class CardsComponent implements OnInit {


 

  cards: cards [] = [
    {
      image: "assets/images/u2.webp",
      btn: "btn-danger",
    },
    {
      image: "assets/images/u3.webp",
      btn: "btn-warning",
    },
    {
      image: "assets/images/u4.webp",
      btn: "btn-info",
    },
  ]
  TicketCountFermer = 0;
  TicketCountAttent=0;
  TicketCountTotal=0;
  ArticleCountTotal=0;


  Tickets: Ticket[] = [];



  constructor(private ticketService: TicketService,
    private articleService : ArticleService) { }

  ngOnInit() {
    this.getTickets();
    this.getArticles();
  }

  getTickets() {
    this.ticketService.getTickets().subscribe((tickets) => {
      this.TicketCountFermer = tickets.filter((ticket) =>ticket.status === 'Repondu').length;
      this.TicketCountAttent = tickets.filter((ticket) =>ticket.status === 'En attente').length;
      this.TicketCountTotal = tickets.length
      ;
    });
  }

  getArticles() {
    this.articleService.getArticles().subscribe((article) => {
    
      this.ArticleCountTotal = article.length
      ;
    });
  }

}
