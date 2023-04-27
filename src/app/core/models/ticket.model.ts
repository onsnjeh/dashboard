

export interface Ticket {

  id: number;
  priorite: number ;
  categorie: string ;
  question: string ;
  fichier: File[] ;
  status: string ;
  dateCreate: Date ;
  assignee?: string;
  responseText: string[] ;
  responseFile: File[] ;
  createdUp: Date ;
  responses: any;
  dateFermer: Date ;


}
