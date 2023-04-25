import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ArticleService } from 'src/app/core/services/article.service';

@Component({
  selector: 'app-modifier-profil',
  templateUrl: './modifier-profil.component.html',
  styleUrls: ['./modifier-profil.component.css']
})
export class ModifierProfilComponent {
  closeResult: string='';

  constructor(
     private modalService: NgbModal
  ) { }
 

  openModalDialogCustomClass(content:any) {
		this.modalService.open(content, {size: 'lg' });
	}
  
  
   
    
  

}
