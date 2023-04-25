import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { NgApexchartsModule } from "ng-apexcharts";
import { DemoFlexyModule } from "../demo-flexy-module";
import { CardsComponent } from "./dashboard-components/cards/cards.component";
import { ListDocComponent } from "./dashboard-components/list-doc/list-doc.component";
import { TicketComponent } from "./dashboard-components/ticket/ticket.component";
import { DashboardComponent } from "./dashboard.component";
import { NgxPaginationModule } from "ngx-pagination";
import { RouterModule } from "@angular/router";




@NgModule({
  declarations: [
    DashboardComponent,
  
    CardsComponent,
    ListDocComponent,
    TicketComponent,
  ],
  imports: [
    CommonModule,
    DemoFlexyModule,
    FormsModule,
    NgApexchartsModule,
    NgxPaginationModule,
    RouterModule

  ],
  exports: [
    DashboardComponent,
  
    CardsComponent,
    ListDocComponent,
    TicketComponent
  ]
})
export class DashboardModule { }
