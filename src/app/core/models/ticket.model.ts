// export class Ticket {
//   id: number = 0;
//   nom: string = '';
//   priorite: string;
//   categorie: string;
//   //document
//   name: string = '';
//   content: string = '';
//   date: string = '';
// }

export class Ticket {
  
  id?: number;
  titre: string = '';
  priorite: number = 0;
  categorie: string = '';
  question: string = '';
  fichier: File[] = [];
  status:string='';
  date: string = new Date().toISOString();
  assignee?: string;
  responseText: string[]=[];
  responseFile: File[] = [];
  createdUp: string = new Date().toISOString();
  responses: any;
  dateFermer: string = new Date().toISOString();


}
