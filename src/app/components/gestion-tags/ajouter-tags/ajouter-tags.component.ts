import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Tag } from 'src/app/core/models/article.model';
import { TagService } from 'src/app/core/services/tags.service';

@Component({
  selector: 'app-ajouter-tags',
  templateUrl: './ajouter-tags.component.html',
  styleUrls: ['./ajouter-tags.component.css']
})
export class AjouterTagsComponent implements OnInit {
  tags: Tag[] = [];
  newTag: Tag = {
    id: 0,
    title: '',
    description: '',
    level: 0,
    parentName: '',
    children: []
  };

  constructor(
    private modalService: NgbModal,
    private tagService: TagService
  ) {}

  openModalDialogCustomClass(content: any) {
    this.modalService.open(content, { size: 'lg' });
  }

  ngOnInit(): void {
    this.getTags();
  }

  getTags(): void {
    this.tagService.getTags().subscribe((tags) => {
      this.tags = tags;
    });
  }

  addTag(): void {
    if (this.newTag.level === 0) {
      // Ajouter le nouveau tag au niveau supérieur
      this.newTag.children = [];
      this.tagService.createTag(this.newTag)
        .subscribe(newTag => {
          this.tags.push(newTag);
          this.resetNewTag();
        });
    } else {
      // Ajouter le nouveau tag en tant que sous-tag d'un tag existant
      const parentTag = this.findTagByTitle(this.newTag.parentName, this.tags);
      if (parentTag) {
        const existingTag = this.findTagByTitle(this.newTag.title, parentTag.children);
        if (existingTag) {
          console.error('Tag already exists as a child.');
        } else {
          this.createChildTag(this.newTag, parentTag);
        }
      } else {
        console.error('Parent tag not found.');
      }
    }
  }
  
  createChildTag(tag: Tag, parentTag: Tag): void {
    const levelTag = { ...tag };
    levelTag.parentName = parentTag.title; // Mise à jour du parentName
    this.tagService.createTag(levelTag)
      .subscribe(newLevelTag => {
        parentTag.children.push(newLevelTag);
        this.tagService.updateTag(parentTag)
          .subscribe(updatedParentTag => {
            this.tags.push(updatedParentTag);
            this.resetNewTag();
          });
      });
  }
  

  resetNewTag(): void {
    this.newTag = {
      id: 0,
      title: '',
      description: '',
      level: 0,
      parentName: '',
      children: []
    };
  }

  findTagByTitle(tagTitle: string, tags: Tag[]): Tag | undefined {
    for (const tag of tags) {
      if (tag.title === tagTitle) {
        return tag;
      } else if (tag.children && tag.children.length > 0) {
        const foundTag = this.findTagByTitle(tagTitle, tag.children);
        if (foundTag) {
          return foundTag;
        }
      }
    }
    return undefined;
  }
}
