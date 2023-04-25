import { Component} from '@angular/core';


@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent  {

  // profileForm = new FormGroup({
  //   nom: new FormControl(''),
  //   prenom: new FormControl(''),
  //   email: new FormControl(''),
  //   password: new FormControl(''),
   
  // });

  // comptes!: Compte[];

  // constructor(private http: HttpClient) { }

  // ngOnInit() {
  //   this.http.get<{ comptes: Compte[] }>('db.json').subscribe(data => {
  //     this.comptes = data.comptes;
  //     this.profileForm.setValue({
  //       nom: this.comptes[0].nom,
  //       prenom: this.comptes[0].prenom,
  //       email: this.comptes[0].email,
  //       password: this.comptes[0].password,
      
  //     });
  //   });
  // }

  // onSubmit() {
  //   const updatedCompte = {
  //     nom: this.profileForm.value.nom,
  //     prenom: this.profileForm.value.prenom,
  //     email: this.profileForm.value.email,
  //     password: this.profileForm.value.password,
      
  //   };
  //   this.http.put('db.json', updatedCompte).subscribe(() => {
  //     alert('Les modifications ont été enregistrées avec succès.');
  //   });
  // }
}