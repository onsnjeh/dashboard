import { Injectable } from '@angular/core';
import { Partenaire } from '../models/partenaire.model';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PartenairesService {

  baseUrl = 'http://localhost:3000/partenaires';

  constructor(private http: HttpClient) {}

  getPartenaire() : Observable<Partenaire[]> {
    return this.http.get<Partenaire []>(this.baseUrl);
  }
  // Récupère un Partenaire par son id
  getById(id: number): Observable<Partenaire> {
    return this.http.get<Partenaire>(`${this.baseUrl}/${id}`);
  }

  // Crée un nouveau Partenaire
  create(partenaire: Partenaire): Observable<Partenaire> {
    return this.http.post<Partenaire>(`${this.baseUrl}`, partenaire);
  }
  getByName(nom: string): Observable<Partenaire> {
    const url = `${this.baseUrl}?nom=${nom}`;
    return this.http.get<Partenaire>(url);
  }
  // Met à jour un Partenaire existant
  update(id: number, Partenaire: Partenaire): Observable<Partenaire> {
    return this.http.put<Partenaire>(`${this.baseUrl}/${id}`, Partenaire);
}
  // Supprime un Partenaire existant
  delete(id: number): Observable<Partenaire> {
    return this.http.delete<Partenaire>(`${this.baseUrl}/${id}`);
  }

  searchPartenaires(searchTerm: string): Observable<Partenaire[]> {
    return this.http.get<Partenaire[]>(`${this.baseUrl}?q=${searchTerm}`);
  }

}
