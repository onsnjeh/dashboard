export interface Categorie {
  id: number;
  name: string ;
  description: string;
  dateCreate?: Date; 
}

export interface Type {
  id: number;
  name: string ;
  categorieId?: number;
  categorieName?: string;
}

export interface Theme {
  id: number;
  name: string ;
  categorieId?: number;
  categorieName?: string;
}
