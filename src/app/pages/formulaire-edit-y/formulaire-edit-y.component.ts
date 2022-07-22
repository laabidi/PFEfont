import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { Utilisateur } from '../utilisateur/utilisateur';
import { UtilisateurService } from '../utilisateur/utilisateur.service';

@Component({
  selector: 'ngx-formulaire-edit-y',
  templateUrl: './formulaire-edit-y.component.html',
  styleUrls: ['./formulaire-edit-y.component.scss']
})
export class FormulaireEditYComponent implements OnInit {

  utilisateur :Utilisateur;
  ATM: string;
    constructor(
      private service: UtilisateurService, private router: Router,private toastr: NbToastrService) { }
  
    ngOnInit() {  
      this.utilisateur = new Utilisateur();
        let idUser= localStorage.getItem('idUser');
        this.ATM = 'Modifier';
        this.service.retrieveUtilisateur(+idUser).subscribe(
          data => { this.utilisateur = data; },
          error => { console.log('error'); });
    }
    onAddTM() {
        this.service.updateUtilisateur(this.utilisateur).subscribe(
          data => {
            localStorage.removeItem('e');

            this.router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
            this.router.navigate(['/pages/form']));  
            this.toastr.success('', 'Votre profile a été modifié avec succès');
                   
          },
         error => { console.log('error'); });
      
    }
    onclose(){
      location.reload();
    }
    }