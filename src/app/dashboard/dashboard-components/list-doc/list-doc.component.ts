import { Component } from "@angular/core";
import { Article } from "src/app/core/models/article.model";
import { ArticleService } from "src/app/core/services/article.service";


@Component({
selector: 'app-list-doc',
templateUrl: './list-doc.component.html',
styleUrls: ['./list-doc.component.css'],

})
export class ListDocComponent {
  articles: Article[] = []; // Les Articles affichés
    page = 1; // La page courante
    pageSize = 3; // Nombre de Articles par page
  
    constructor(private ArticleService: ArticleService) { }
  
    ngOnInit() {
      this.loadArticles();
    }
  
    // Charge les Articles depuis le serveur
    loadArticles() {
      this.ArticleService.getArticles().subscribe(articles => {
        this.articles = articles;
      });
    }
  
    // Retourne les Articles à afficher pour la page courante
    get ArticlesToShow(): Article[] {
      const startIndex = (this.page - 1) * this.pageSize;
      return this.articles.slice(startIndex, startIndex + this.pageSize);
    }
  
    // Passe à la page suivante
    nextPage() {
      if (this.page < this.pageCount) {
        this.page++;
      }
    }
  
    // Passe à la page précédente
    prevPage() {
      if (this.page > 1) {
        this.page--;
      }
    }
  
    // Retourne le nombre total de pages
    get pageCount(): number {
      return Math.ceil(this.articles.length / this.pageSize);
    }
  }
  

