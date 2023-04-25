

// interface Item {
//   title: string;
//   description: string;
//   level: number;
//   children?: Item[];
//   expanded?: boolean;
// }

import { Component } from "@angular/core";
import { Tag } from "src/app/core/models/article.model";
import { TagService } from "src/app/core/services/tags.service";

@Component({
  selector: 'app-gestion-tags',
  templateUrl: './gestion-tags.component.html',
  styleUrls: ['./gestion-tags.component.css']
})
export class GestionTagsComponent {
  items: Tag[]=[];

  constructor(private TagService:TagService) {}

  ngOnInit() {
    this.TagService.getTags().subscribe((items: Tag[]) => this.items = items);
  }

  toggleExpand(item: Tag) {
    if (item.children && item.children.length > 0) {
      item.expanded = !item.expanded;
    }
  }

  getChildItems(item: Tag): Tag[] {
    let childItems: Tag[] = [];

    if (item.children && item.children.length > 0) {
      childItems = item.children;

      item.children.forEach(child => {
        const childItemsRecursion = this.getChildItems(child);
        childItems = childItems.concat(childItemsRecursion);
      });
    }

    return childItems;
  }
}


