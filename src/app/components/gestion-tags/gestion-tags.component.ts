import { Component } from "@angular/core";
import { Tag } from "src/app/core/models/article.model";
import { TagService } from "src/app/core/services/tags.service";

@Component({
  selector: 'app-gestion-tags',
  templateUrl: './gestion-tags.component.html',
  styleUrls: ['./gestion-tags.component.css']
})
export class GestionTagsComponent {
  tags: Tag[]=[];

  constructor(private TagService:TagService) {}

  ngOnInit() {
    this.TagService.getTags().subscribe((tags: Tag[]) => this.tags = tags);
    this.search(''); // appel initial sans terme de recherche

  }

  toggleExpand(tags: Tag) {
    if (tags.children && tags.children.length > 0) {
      tags.expanded = !tags.expanded;
    }
  }
  search(searchTerm: string) {
    this.TagService.searchTags(searchTerm).subscribe(
      tags => this.tags = tags,
    );
  }

  onSearch(searchTerm: string) {
    this.search(searchTerm);
  }

  onClear() {
    this.search('');
  }
  getChildtagss(tags: Tag): Tag[] {
    let childtagss: Tag[] = [];

    if (tags.children && tags.children.length > 0) {
      childtagss = tags.children;

      tags.children.forEach(child => {
        const childtagssRecursion = this.getChildtagss(child);
        childtagss = childtagss.concat(childtagssRecursion);
      });
    }

    return childtagss;
  }

  //supprimer tags
  deleteTags(tags: Tag) :void {
    this.TagService.deleteTag(tags.id)
      .subscribe(() => {
        alert('Tags supprimé !');
        this.tags = this.tags.filter(p => p !== tags);
      });
  }
}


