import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  Observable, map, tap } from 'rxjs';
import { Ticket} from '../models/ticket.model';


@Injectable({
  providedIn: 'root'
})
export class TicketService {
  private baseUrl = 'http://localhost:3000/ticket'; // URL de l'API json-server

  constructor(private http: HttpClient) {

  }
  getTopTickets() :Observable<Ticket[]> { 
    return this.http.get<Ticket[]>(`${this.baseUrl}?_limit=5`);
  }
 
  getTicketsByCategory(categorie: string): Observable<Ticket[]> {
    const url = `${this.baseUrl}?categorie=${categorie}`;
    return this.http.get<Ticket[]>(url);
  }

  // Récupère tous les tickets
  getTickets(): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(`${this.baseUrl}`);
  }

  // Récupère un ticket par son id
  getById(id: number): Observable<Ticket> {
    return this.http.get<Ticket>(`${this.baseUrl}/${id}`);
  }

  // Crée un nouveau ticket
  create(ticket: Ticket): Observable<Ticket> {
    return this.http.post<Ticket>(`${this.baseUrl}`, ticket)
   
  }

  // Met à jour un ticket existant
  update(id: number, ticket: Ticket,formData :FormData): Observable<Ticket> {
    return this.http.put<Ticket>(`${this.baseUrl}/${id}`, ticket)
    
  }
  updateTicket(id: number, ticket: Ticket): Observable<Ticket> {
    return this.http.put<Ticket>(`${this.baseUrl}/${id}`, ticket)
  }

  //changer un ticket en attente 
  updateTicketStatus(id: number, status: string): Observable<Ticket> {
    const url = `${this.baseUrl}/${id}`;
    const body = { status: status };
    return this.http.patch<Ticket>(url, body);
  }
  //assigner un ticket
  assignTicket(id: number, assignee: string): Observable<Ticket> {
    const url = `${this.baseUrl}/${id}`;
    const body = { assignee: assignee };
    return this.http.patch<Ticket>(url, body);
  }

   //changer un ticket en priorite
   updateTicketPriorite(id: number, priorite: string): Observable<Ticket> {
    const url = `${this.baseUrl}/${id}`;
    const body = { priorite: priorite };
    return this.http.patch<Ticket>(url, body);
  }

//dernier un ticket
getLastTicket(): Observable<Ticket> {
  return this.http.get<Ticket[]>(this.baseUrl).pipe(
    map(tickets => {
      return tickets[tickets.length - 1];
    })
  );
}
searchTickets(searchTerm: string): Observable<Ticket[]> {
  return this.http.get<Ticket[]>(`${this.baseUrl}?q=${searchTerm}`);
}

}