import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbToastrService, NbWindowRef } from '@nebular/theme';
import { Utilisateur } from '../utilisateur';
import { UtilisateurService } from '../utilisateur.service';

@Component({
  selector: 'ngx-utilisateur-modal',
  templateUrl: './utilisateur-modal.component.html',
  styleUrls: ['./utilisateur-modal.component.scss']
})
export class UtilisateurModalComponent implements OnInit {
  utilisateur :Utilisateur;
  ATM: string;
    constructor(public windowRef: NbWindowRef, 
      private service: UtilisateurService, private router: Router,private toastr: NbToastrService) { }
  
    ngOnInit() {
      let e = localStorage.getItem('e');
  
      this.utilisateur = new Utilisateur();
      if (e === '0') { 
        this.ATM = 'Ajouter';
      }
      if (e === '1') {
        let id= localStorage.getItem('id');
        this.ATM = 'Modifier';
        this.service.retrieveUtilisateur(+id).subscribe(
          data => { this.utilisateur = data; },
          error => { console.log('error'); });
      }
    }
    onAddTM() {
      let e = localStorage.getItem('e');
  
      if (e === '0') {
        this.service.addUtilisateur(this.utilisateur).subscribe(
          data => { localStorage.removeItem('e');
          this.router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
          this.router.navigate(['/pages/utilisateurActive'])); 
          this.toastr.success('', 'Ajouté avec succès');  
          this.windowRef.close(); },
          error => {
            console.log('error');
          });
      }
      if (e === '1') {
        this.service.updateUtilisateur(this.utilisateur).subscribe(
          data => {
            localStorage.removeItem('e');
            this.router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
            this.router.navigate(['/pages/utilisateurActive']));
            this.toastr.success('', 'modifié avec succès'); 
  
                    this.windowRef.close();
          },
          error => { console.log('error'); });
      }
    }
    onclose(){
      this.windowRef.close();
    }
    }