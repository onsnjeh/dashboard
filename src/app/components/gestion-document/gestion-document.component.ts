import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Article, Tag } from 'src/app/core/models/article.model';
import { ArticleService } from 'src/app/core/services/article.service';
import { TagService } from 'src/app/core/services/tags.service';


@Component({
  selector: 'app-gestion-document',
  templateUrl: './gestion-document.component.html',
  styleUrls: ['./gestion-document.component.css']
})
export class GestionDocumentComponent implements OnInit{
  articles: Article[] =[] ; // Les Articles affichés
    page = 1; // La page courante
    pageSize = 5; // Nombre de Articles par page
    tags: Tag[] = []; // Les tags affichés

    constructor(private ArticleService: ArticleService,
      private TagService : TagService) { }
  
    ngOnInit() {
      this.loadArticles();
    }
  
    // Charge les Articles depuis le serveur
    loadArticles() {
      this.ArticleService.getArticles().subscribe(articles => {
        this.articles = articles;
        // this.loadTags();
     

      });
    }
  

    // Charge les Articles depuis le serveur
    // loadTags() {
    //   this.TagService.getTags().subscribe(tags => {
    //     this.tags = tags;
    //   });
    // }


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

    //recupere tag 
    // getTagName(title: string): string {
    //   const tag = this.tags.find(t => t.title === title);
    //   return tag ? tag.title : '';
    // }
  }
  