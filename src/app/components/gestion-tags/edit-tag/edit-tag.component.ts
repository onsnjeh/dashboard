import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Tag } from 'src/app/core/models/article.model';
import { TagService } from 'src/app/core/services/tags.service';

@Component({
  selector: 'app-edit-tag',
  templateUrl: './edit-tag.component.html',
  styleUrls: ['./edit-tag.component.scss']
})
export class EditTagComponent implements OnInit {
  tag!: Tag;
  tagForm = this.formBuilder.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
  
  });
  constructor(
    private tagService: TagService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.tagService.getById(id)
    .subscribe(tag => {
      if (tag) { // add null check here
        this.tag = tag;
        this.tagForm.setValue({
          title: tag.title,
          description: tag.description,
  

        });
      }
    });
}  
  onSubmit() {
    const updatedtag:Tag = {
      id: this.tag.id,
      title: this.tagForm.value.title ?? '',
      description: this.tagForm.value.description ?? '',
      level: 0,
      parentId: 0
    };
    this.tagService.updateTag(this.tag.id,updatedtag)
    .subscribe(() => {
      this.tag=this.tag
      this.router.navigate(['/gestion-tags']);
      alert("Tag modifié avec succès.")   });
  }
  annuler(){
    this.router.navigate(['/gestion-tags'])
  }
}