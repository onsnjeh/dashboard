import { Injectable } from '@angular/core';
import { Profile } from '../models/profile.model';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  baseUrl = 'http://localhost:3000/profile';

  constructor(private http: HttpClient) {}

  getProfile() {
    return this.http.get<Profile []>(this.baseUrl);
  }

  getProfil(nom:string){
    return this.http.get< Profile>(`http://localhost:3000/profile?role=${nom}`);

  }

  
  chercherProfile(variable: string): Promise<string> {
    return this.http.get<Profile>(this.baseUrl).toPromise()
      .then((data: any) => {
        const obj = data.find((item: any) => item.role === variable);
        return obj ? obj.nom : null;
      })
      .catch((err: any) => {
        console.error(err);
        return null;
      });
  }

}