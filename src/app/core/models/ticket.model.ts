

export interface Ticket {

  id: number;
  priorite: number ;
  categorie: string ;
  question: string ;
  fichier: File[] ;
  status: string ;
  dateCreate: Date ;
  assignee?: string;
  responseText: string ;
  responseFile: File;
  dateRepondre: Date ;
  dateFermer: Date ;


}
