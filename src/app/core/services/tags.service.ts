import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, switchMap, throwError } from 'rxjs';
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
  
    getById(id: number): Observable<Tag> {
      return this.http.get<Tag>(`${this.apiUrl}/${id}`);
    }
    createTag(tag: Tag): Observable<Tag> {
      return this.http.post<Tag>(this.apiUrl, tag);
    }
    // findParentTagByName(tagName: string, tags: Tag[]): Tag | undefined {
    //   for (const tag of tags) {
    //     if (tag.title === tagName) {
    //       return tag;
    //     } else if (tag.children && tag.children.length > 0) {
    //       const foundTag = this.findParentTagByName(tagName, tag.children);
    //       if (foundTag) {
    //         return foundTag;
    //       }
    //     }
    //   }
    //   return undefined;
    // }
  
    updateTag(tag: Tag): Observable<Tag> {
      const url = `${this.apiUrl}/${tag.id}`;
      return this.http.put<Tag>(url, tag);
    }
  
    deleteTag(id: number): Observable<any> {
      return this.http.delete(`${this.apiUrl}/${id}`);
    }
  
    searchTags(searchTerm: string): Observable<Tag[]> {
      return this.http.get<Tag[]>(`${this.apiUrl}?q=${searchTerm}`);
    }
  }