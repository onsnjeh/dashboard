export class Menu{  
    id?: number ;
    
      label:string='';
      sousLabel:string[]=[''];
    }
    export class Profile{  
    id?: number ;
    role:string='';
    menus: Menu[]=[]
    
    // etat:string;
    // date_publication : string='';
    // abstract:string='';
    // tags :string='';
    // nature:string;

  }