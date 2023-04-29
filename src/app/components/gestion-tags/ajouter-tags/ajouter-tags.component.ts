import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ArticleService } from 'src/app/core/services/article.service';

@Component({
  selector: 'app-ajouter-tags',
  templateUrl: './ajouter-tags.component.html',
  styleUrls: ['./ajouter-tags.component.css']
})
export class AjouterTagsComponent {
  closeResult: string='';
  list: any;
  listTags: any;
  constructor(
     private modalService: NgbModal, list: ArticleService
  ) { }
 

  openModalDialogCustomClass(content:any) {
		this.modalService.open(content, {size: 'lg' });
	}
  
  
    selectedCategory: any = {};
    selectedTheme: any = {};
    selectedType: any = {};
    listCategory :any;
  
  
  
    ngOnInit() {
      // this.list.getTags().subscribe((allData:any) => {
      //   this.listTags = allData;
      //   })
    }
  
   


}
