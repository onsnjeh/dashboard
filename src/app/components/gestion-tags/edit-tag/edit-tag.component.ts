import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Tag } from 'src/app/core/models/article.model';
import { TagService } from 'src/app/core/services/tags.service';

@Component({
  selector: 'app-edit-tag',
  templateUrl: './edit-tag.component.html',
  styleUrls: ['./edit-tag.component.scss']
})
export class EditTagComponent implements OnInit {
  tagForm!: FormGroup;
  tag!: Tag;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private tagService: TagService
  ) { }

  ngOnInit() {
    this.tagForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      level: [0, Validators.required],
      parentName: [''],
      children: this.formBuilder.array([])
    });

    const tagId = Number(this.route.snapshot.paramMap.get('id'));
    this.getTag(tagId);
  }

  getTag(tagId: number) {
    this.tagService.getById(tagId).subscribe(
      (tag: Tag) => {
        this.tag = tag;
        this.tagForm.patchValue({
          title: tag.title,
          description: tag.description,
          level: tag.level,
          parentName: tag.parentName
        });

        this.setChildren(tag.children);
      },
      (error) => {
        // Gérer l'erreur (par exemple, afficher un message d'erreur)
      }
    );
  }



  updateTag() {
    if (this.tagForm.valid) {
      const updatedTag: Tag = {
        id: this.tag.id,
        title: this.tagForm.value.title,
        description: this.tagForm.value.description,
        level: this.tagForm.value.level,
        parentName: this.tagForm.value.parentName,
        children: this.tagForm.value.children
      };

      this.tagService.updateTag(updatedTag).subscribe(
        () => {
          alert('Tag modifié avec succès');
          // Rediriger vers la liste des tags après la mise à jour réussie
          this.router.navigate(['/gestion-tags']);
        },
        (error) => {
          // Gérer l'erreur (par exemple, afficher un message d'erreur)
        }
      );
    }
  }
  setChildren(children: any[]) {
    const childrenArray = this.tagForm.get('children') as FormArray;
    childrenArray.clear();

    if (children && children.length > 0) {
      children.forEach((child) => {
        const childGroup = this.formBuilder.group({
          title: [child.title, Validators.required],
          description: [child.description, Validators.required]
        });
        childrenArray.push(childGroup);
      });
    }
  }

  getChildrenControls() {
    return (this.tagForm.get('children') as FormArray).controls;
  }


  annuler() {
    // Rediriger vers la liste des tags
    this.router.navigate(['/gestion-tags']);
  }
}
