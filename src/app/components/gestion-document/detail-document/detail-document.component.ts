import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from 'src/app/core/models/article.model';
import { ArticleService } from 'src/app/core/services/article.service';

@Component({
  selector: 'app-detail-document',
  templateUrl: './detail-document.component.html',
  styleUrls: ['./detail-document.component.scss']
})
export class DetailDocumentComponent implements OnInit {

 

  Article!: Article;

  constructor(
    private route: ActivatedRoute,
    private ArticleService: ArticleService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.ArticleService.getById(Number(id)).subscribe(Article => this.Article = Article);
    }
  }

  annuler(): void {
    this.router.navigate(['/gestion-document']);
  }
}