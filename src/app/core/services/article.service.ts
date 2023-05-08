import { Injectable } from '@angular/core';
import { Article, Tag } from '../models/article.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private baseUrl = 'http://localhost:3000/article'; // URL de l'API json-server

  constructor(private http: HttpClient) { }

// Récupère tous les tags 
getArticles(): Observable<Article[]> {
  return this.http.get<Article[]>(`${this.baseUrl}`);
}



  // Récupère un Article par son id
  getById(id: number): Observable<Article> {
    return this.http.get<Article>(`${this.baseUrl}/${id}`);
  }

  // Crée un nouveau Article
  create(article: Article): Observable<Article> {
    return this.http.post<Article>(`${this.baseUrl}`, article);
  }

  // Met à jour un Article existant
  update(id: number, article: Article): Observable<Article> {
    return this.http.put<Article>(`${this.baseUrl}/${id}`, article);
  }

  // Supprime un Article existant
  delete(id: number): Observable<Article> {
    return this.http.delete<Article>(`${this.baseUrl}/${id}`);
  }

  searchArticles(searchTerm: string): Observable<Article[]> {
    return this.http.get<Article[]>(`${this.baseUrl}?q=${searchTerm}`);
  }

//   import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

// @Injectable({
//   providedIn: 'root'
// })
// export class SchemaService {

//   private readonly jsonServerUrl = 'http://localhost:3000/schemas';

//   constructor(private http: HttpClient) { }

//   saveSchema(fileInput: HTMLInputElement) {
//     const fullPath = fileInput.value;
//     const schemaUrl = `file:///${fullPath.replace(/\\/g, '/')}`;
//     const schema = {
//       url: schemaUrl
//     };
//     return this.http.post(this.jsonServerUrl, schema);
//   }
// }

}

