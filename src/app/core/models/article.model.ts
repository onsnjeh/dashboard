export interface Tag {
  id: number;
  title: string;
  description: string;
  level: number;
  parentName: string;
  // parentId: number;
  children: Tag[];
  expanded?: boolean;
}


export interface  Article {

  id: number;
  titre: string ;
  reference: number ;
  date_publication: string ;
  abstract: string ;
  dateCreate: Date;
  tags: string[] ;
  categorie: string ;
  type: string ;
  theme: string;
  fichier: File ;
  textFichier: string ;


}