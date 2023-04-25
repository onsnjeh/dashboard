export interface Tag {
  id: number;
  title: string;
  description: string;
  level: number;
  children?: Tag[];
  expanded?: boolean;
}
export class Article {

  id?: number;
  titre: string = '';
  reference: number = 0;
  date_publication: string = '';
  abstract: string = '';
  dateCreate: string = new Date().toISOString()
  tags: number[] = [];
  categorie: string = '';
  type: string = '';
  theme: string = '';
  fichier: File[] = [];
  textFichier: string = ''


}