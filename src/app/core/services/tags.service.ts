import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tag } from '../models/article.model';

@Injectable({
  providedIn: 'root'
})
export class TagService {
  private apiUrl = 'http://localhost:3000/tags';

  constructor(private http: HttpClient) {}

  getTags(): Observable<Tag[]> {
    return this.http.get<Tag[]>(this.apiUrl);
  }

  createTag(tag: Tag): Observable<Tag> {
    return this.http.post<Tag>(this.apiUrl, tag);
  }

  updateTag(tag: Tag): Observable<Tag> {
    return this.http.put<Tag>(`${this.apiUrl}/${tag.id}`, tag);
  }

  deleteTag(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
