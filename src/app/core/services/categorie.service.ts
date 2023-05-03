import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin, map, of, switchMap } from 'rxjs';
import { Categorie, Theme, Type } from '../models/categorie.model';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {


  private baseUrl = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  // Récupérer toutes les catégories
  getCategories(): Observable<Categorie[]> {
    const url = `${this.baseUrl}categorie`;
    return this.http.get<Categorie[]>(url);
  }

    // Récupérer toutes les catégories
    getTypes(): Observable<Type[]> {
      const url = `${this.baseUrl}type`;
      return this.http.get<Type[]>(url);
    }

      // Récupérer toutes les catégories
      getThemes(): Observable<Theme[]> {
    const url = `${this.baseUrl}theme`;
    return this.http.get<Theme[]>(url);
  }

  // Récupérer les thèmes par rapport à l'id de la catégorie
  getTypesByCategorieName(categorieName: string): Observable<Theme[]> {
    const url = `${this.baseUrl}type?categorieName=${categorieName}`;
    return this.http.get<Type[]>(url);
  }

  // Récupérer les types par rapport à l'id de la catégorie
  getThemesByCategorieName(categorieName: string): Observable<Type[]> {
    const url = `${this.baseUrl}theme?categorieName=${categorieName}`;
    return this.http.get<Theme[]>(url);
  }

  // Récupérer un nombre limité de catégories
  getLimitCategorie(): Observable<Categorie[]> {
    const url = `${this.baseUrl}categorie?_limit=3`;
    return this.http.get<Categorie[]>(url);
  }

  // Récupérer une catégorie par son nom
  getCategoryByName(name: string): Observable<Categorie> {
    const url = `${this.baseUrl}categorie?name=${name}`;
    return this.http.get<Categorie>(url);
  }

  // Crée un nouveau Categorie
  create(Categorie: Categorie): Observable<Categorie> {
    return this.http.post<Categorie>(`${this.baseUrl}categorie`, Categorie);
  }

  // Crée un nouveau un type à une catégorie
  createType(type: Type): Observable<Type> {
    return this.http.post<Type>(`${this.baseUrl}type`, type);
  }

  // Crée un nouveau un theme à une catégorie
  createTheme(theme: Theme): Observable<Theme> {

    return this.http.post<Theme>(`${this.baseUrl}theme`, theme);
  }
  // Met à jour un Categorie existant
  update(id: number, Categorie: Categorie): Observable<Categorie> {
    return this.http.put<Categorie>(`${this.baseUrl}categorie/${id}`, Categorie);
  }
  // Supprime un Categorie existant
  delete(id: number): Observable<Categorie> {
    return this.http.delete<Categorie>(`${this.baseUrl}categorie/${id}`);
  }

  // Récupère un Categorie par son id
  getById(id: number): Observable<Categorie> {
    return this.http.get<Categorie>(`${this.baseUrl}categorie/${id}`);
  }

  //  Récupérer une type par son id de categorie
  getTypeBycategorieId(categorieId: number): Observable<Type[]> {
    return this.http.get<Type[]>(`${this.baseUrl}type?categorieId=${categorieId}`);
  }

  //  Récupérer une theme par son id de categorie
  getThemeBycategorieId(categorieId: number): Observable<Theme[]> {
    return this.http.get<Theme[]>(`${this.baseUrl}theme?categorieId=${categorieId}`);
  }

  // Supprime en meme temps
  deleteCategorie(categorieId: number): Observable<any> {
    // Supprimer la catégorie elle-même
    const deleteCategorie = this.http.delete<Categorie>(
      `${this.baseUrl}categorie/${categorieId}`
    );

    // Récupérer les types associés à la catégorie
    const getTypes = this.http.get<Type[]>(
      `${this.baseUrl}type?categorieId=${categorieId}`
    );

    // Récupérer les thèmes associés à la catégorie
    const getThemes = this.http.get<Theme[]>(
      `${this.baseUrl}theme?categorieId=${categorieId}`
    );

    // Supprimer les types associés à la catégorie
    const deleteTypes = getTypes.pipe(
      switchMap((types: Type[]) => {
        const deleteTypeObservables = types.map((type) =>
          this.http.delete(`${this.baseUrl}type/${type.id}`)
        );
        return forkJoin(deleteTypeObservables);
      })
    );

    // Supprimer les thèmes associés à la catégorie
    const deleteThemes = getThemes.pipe(
      switchMap((themes: Theme[]) => {
        const deleteThemeObservables = themes.map((theme) =>
          this.http.delete(`${this.baseUrl}theme/${theme.id}`)
        );
        return forkJoin(deleteThemeObservables);
      })
    );

    // Combiner les requêtes de suppression en une seule
    return forkJoin([deleteCategorie, deleteTypes, deleteThemes]);
  }
  

  // Mettez à jour un type
  
  updateType(type: Type): Observable<Type> {
    const url = `${this.baseUrl}type/${type.id}`;
    return this.http.put<Type>(url, type);
  }

  updateTheme(theme: Theme): Observable<Theme> {
    const url = `${this.baseUrl}theme/${theme.id}`;
    return this.http.put<Theme>(url, theme);
  }

  updateCategorie(categorie: Categorie): Observable<Categorie> {
    const url =` ${this.baseUrl}categorie/${categorie.id}`;
    return this.http.put<Categorie>(url, categorie).pipe(
    switchMap((updatedCategorie) => {
    // Mettre à jour les types associés à la catégorie
    const updateTypes = this.getTypeBycategorieId(categorie.id).pipe(
    switchMap((types: Type[]) => {
    const updateTypeObservables = types.map((type) =>
    this.updateType({ ...type, categorieName: categorie.name })
    );
    return forkJoin(updateTypeObservables);
    })
    );
        // Mettre à jour les thèmes associés à la catégorie
        const updateThemes = this.getThemeBycategorieId(categorie.id).pipe(
          switchMap((themes: Theme[]) => {
            const updateThemeObservables = themes.map((theme) =>
              this.updateTheme({ ...theme, categorieName: categorie.name })
            );
            return forkJoin(updateThemeObservables);
          })
        );
    
        // Combiner les requêtes de mise à jour en une seule
        return forkJoin([updateTypes, updateThemes]).pipe(
          map(() => updatedCategorie)
        );
      })
    );
    }
  
    searchCategories(searchTerm: string): Observable<Categorie[]> {
      return this.http.get<Categorie[]>(`${this.baseUrl}categorie/?q=${searchTerm}`);
    
  }
  
  }    