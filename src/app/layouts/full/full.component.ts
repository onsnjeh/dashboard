import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';


interface sidebarMenu {
  link: string;
  icon: string;
  menu: string;
}

@Component({
  selector: 'app-full',
  templateUrl: './full.component.html',
  styleUrls: ['./full.component.scss']
})
export class FullComponent {


 isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
   .pipe(
     map(result => result.matches)
   );

 constructor(private breakpointObserver: BreakpointObserver) { }

  routerActive: string = "activelink";

  sidebarMenu: sidebarMenu[] = [
    {
      link: "/home",
      icon: "home",
      menu: "Home",
    },
    {
      link: "/gestion-document",
      icon: "file-text",
      menu: "List Article ",
    },
    {
      link: "/gestion-ticket",
      icon: "layout",
      menu: "List Ticket",
    },
    {
      link: "/gestion-manager-expert",
      icon: "users",
      menu: "List Manager/Expert",
    },
    {
      link: "/gestion-client",
      icon: "user",
      menu: "List Client",
    },
    {
      link: "/gestion-offre",
      icon: "grid",
      menu: "List Offre",
    },
    {
      link: "/gestion-categorie",
      icon: "menu",
      menu: "List Catégorie",
    },
    {
      link: "/gestion-tags",
      icon: "tag",
      menu: "List Tag",
    },
    {
      link: "/gestion-partenaires",
      icon: "list",
      menu: "List Partenaire",
    },
    {
      link: "/la-paie",
      icon: "bar-chart-2",
      menu: "Fiche de paie",
    }
  ]

}
