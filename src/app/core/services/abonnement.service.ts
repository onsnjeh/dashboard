import { Injectable } from '@angular/core';
import { Abonnement } from '../models/abonnement.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AbonnementService {

  baseUrl = 'http://localhost:3000/abonnement';


  constructor(private http: HttpClient) {}
  
 


  // Récupère tous les Abonnements
  getAbonnements(): Observable<Abonnement[]> {
    return this.http.get<Abonnement[]>(`${this.baseUrl}`);
  }

  // Récupère un Abonnement par son id
  getById(id: number): Observable<Abonnement> {
    return this.http.get<Abonnement>(`${this.baseUrl}/${id}`);
  }

  // Crée un nouveau Abonnement
  create(abonnement: Abonnement): Observable<Abonnement> {
    return this.http.post<Abonnement>(`${this.baseUrl}`, abonnement);
  }

  // Met à jour un Abonnement existant
  update(id: number, abonnement: Abonnement): Observable<Abonnement> {
    return this.http.put<Abonnement>(`${this.baseUrl}/${id}`, abonnement);
  }

  // Supprime un Abonnement existant
  delete(id: number): Observable<Abonnement> {
    return this.http.delete<Abonnement>(`${this.baseUrl}/${id}`);
  }
}