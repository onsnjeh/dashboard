import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Theme, Type } from 'src/app/core/models/categorie.model';
import { CategorieService } from 'src/app/core/services/categorie.service';

@Component({
  selector: 'app-edit-type-theme',
  templateUrl: './edit-type-theme.component.html',
  styleUrls: ['./edit-type-theme.component.scss']
})
export class EditTypeThemeComponent {}
// implements OnInit {
//   typeForm!: FormGroup;
//   themeForm!: FormGroup;
//   type!: Type;
//   theme!: Theme;

//   constructor(private typeService: CategorieService, private fb: FormBuilder, private route: ActivatedRoute, private router: Router) { }

//   ngOnInit() {
//     this.getTypeById();
//     this.getThemeById();
//     this.typeForm = this.fb.group({
//       name: ['', Validators.required],
//     });
//     this.themeForm = this.fb.group({
//       name: ['', Validators.required],
//     });
//   }

//   getTypeById() {
//     const id = this.route.snapshot.paramMap.get('id');
//     this.typeService.getTypeBycategorieId(Number(id)).subscribe((data: any) => {
//       this.type = data;
//       this.typeForm.patchValue({
//         name: data.name,
//       });
//     });
//   }

//   getThemeById() {
//     const id = this.route.snapshot.paramMap.get('id');
//     this.typeService.getThemeBycategorieId(Number(id)).subscribe((data: any) => {
//       this.theme = data;
//       this.themeForm.patchValue({
//         name: data.name,
//       });
//     });
//   }

//   onSubmitType() {
//     const id = this.route.snapshot.paramMap.get('id');
//     this.typeService.updateType(Number(id), this.typeForm.value).subscribe((data: any) => {
//       console.log('Type updated successfully');
//       this.router.navigate(['/types']);
//     });
//   }

//   onSubmitTheme() {
//     const id = this.route.snapshot.paramMap.get('id');
//     this.typeService.updateTheme(Number(id), this.themeForm.value).subscribe((data: any) => {
//       console.log('Theme updated successfully');
//       this.router.navigate(['/themes']);
//     });
//   }
// }