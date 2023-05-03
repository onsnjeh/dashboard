import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Offre } from '../models/offre.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OffreService {

  baseUrl = 'http://localhost:3000/offre';

  constructor(private http: HttpClient) {}

  getOffre(): Observable<Offre[]> {
    return this.http.get<Offre[]>(this.baseUrl);
  }
   // Récupère un Offre par son id
   getById(id: number): Observable<Offre> {
    return this.http.get<Offre>(`${this.baseUrl}/${id}`);
  }

  // Crée un nouveau Offre
  create(Offre: Offre): Observable<Offre> {
    return this.http.post<Offre>(`${this.baseUrl}`, Offre);
  }
  getByName(nom: string): Observable<Offre> {
    const url = `${this.baseUrl}?nom=${nom}`;
    return this.http.get<Offre>(url);
  }
  // Met à jour un Offre existant
  update(id: number, Offre: Offre): Observable<Offre> {
    return this.http.put<Offre>(`${this.baseUrl}/${id}`, Offre);
}
  // Supprime un Offre existant
  delete(id: number): Observable<Offre> {
    return this.http.delete<Offre>(`${this.baseUrl}/${id}`);
  }

   // Récupère un Offre par son titre
   getOffreByTitre(titre: string): Observable<Offre> {
    const url = `${this.baseUrl}?titre=${titre}`;
    return this.http.get<Offre>(url);
  }

  searchOffres(searchTerm: string): Observable<Offre[]> {
    return this.http.get<Offre[]>(`${this.baseUrl}?q=${searchTerm}`);
  }

}