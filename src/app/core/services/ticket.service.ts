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
  // Supprime un ticket existant
  delete(id: number): Observable<Ticket> {
    return this.http.delete<Ticket>(`${this.baseUrl}/${id}`);
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

  //envoyer un ticket par email
  sendNotificationEmail(ticket: Ticket): Observable<any> {
    const url = 'http://localhost:3000/send-email';
    const body = {
      to: ticket.assignee,
      subject: `Ticket ${ticket.id} has been assigned to you`,
      message: `Dear ${ticket.assignee},\n\nYou have been assigned to Ticket ${ticket.id}.\n\nThanks,\nThe Support Team`
    };
    return this.http.post<any>(url, body);
  }
  // private currentUser = 'nesrin'

  //notification 
  // getNotifications(): Observable<Ticket[]> {
  //   return this.http.get<Ticket[]>(this.baseUrl + `?assignee=${this.currentUser}&status=En attente`);
  // }
 //repondre sur un ticket 
//  sendResponse(ticketId: number, response: string): Observable<any> {
//   const url = `${this.baseUrl}/${ticketId}`;

//   return this.http.patch(url, { response });
// }
//changer un ticket en attente 

}