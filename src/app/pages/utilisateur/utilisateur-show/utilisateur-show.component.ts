import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbWindowRef } from '@nebular/theme';
import { Utilisateur } from '../utilisateur';
import { UtilisateurService } from '../utilisateur.service';

@Component({
  selector: 'ngx-utilisateur-show',
  templateUrl: './utilisateur-show.component.html',
  styleUrls: ['./utilisateur-show.component.scss']
})
export class UtilisateurShowComponent implements OnInit {

  utilisateur: Utilisateur;
      constructor(private utilisateurService : UtilisateurService,public windowRef: NbWindowRef,  private router: Router) { }
    
      ngOnInit() {
        this.utilisateur = new Utilisateur();      
        let id = localStorage.getItem("id");
        this.utilisateurService.retrieveUtilisateur(+id).subscribe(
          data =>{this.utilisateur = data;},
          error =>{console.log(error);}
          );
      }
    
}
