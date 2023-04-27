import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from 'src/app/core/models/article.model';
import { ArticleService } from 'src/app/core/services/article.service';


@Component({
  selector: 'app-edit-document',
  templateUrl: './edit-document.component.html',
  styleUrls: ['./edit-document.component.scss']
})
export class EditDocumentComponent implements OnInit {
  article!: Article;

  constructor(private route: ActivatedRoute,    private router: Router
,    private articleService: ArticleService) { }

  ngOnInit(): void {
    const id =Number(this.route.snapshot.paramMap.get('id'));
    this.articleService.getById(id).subscribe(article => {
      this.article = article;
    });
  }

  onSubmit() {
    this.articleService.update(this.article.id,this.article).subscribe(() => {
      this.article=this.article
      this.router.navigate(['/gestion-document']);
      alert("Document modifié avec succès.")   });
  }
  annuler(): void {
    this.router.navigate(['/gestion-document']);
  }
}