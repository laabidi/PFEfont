import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Utilisateur } from '../utilisateur/utilisateur';
import { UtilisateurService } from '../utilisateur/utilisateur.service';

@Component({
  selector: 'ngx-formulaire-view',
  templateUrl: './formulaire-view.component.html',
  styleUrls: ['./formulaire-view.component.scss']
})
export class FormulaireViewComponent implements OnInit {


  utilisateur: Utilisateur;
      constructor(private utilisateurService : UtilisateurService,  private router: Router) { }
    
      ngOnInit() {
        this.utilisateur = new Utilisateur();      
        let idUser = localStorage.getItem("idUser");
        this.utilisateurService.retrieveUtilisateur(+idUser).subscribe(
          data =>{this.utilisateur = data;},
          error =>{console.log(error);}
          );
      }
    
}
