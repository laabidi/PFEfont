import { DemandeattestationtravailService } from './../demandeattestationtravail.service';
import { demandeattestationtravail } from './../demandeattestationtravail';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbToastrService, NbWindowRef } from '@nebular/theme';
@Component({
  selector: 'ngx-demandeattestationtravail-modal',
  templateUrl: './demandeattestationtravail-modal.component.html',
  styleUrls: ['./demandeattestationtravail-modal.component.scss']
})
export class DemandeattestationtravailModalComponent implements OnInit {

  demandeattestationtravail :demandeattestationtravail;
  X: string;
  constructor(public windowRef: NbWindowRef, 
    private service: DemandeattestationtravailService, private router: Router,private toastr: NbToastrService) { }

    ngOnInit() {

      let e = localStorage.getItem('e');
    
        this.demandeattestationtravail = new demandeattestationtravail();
        if (e === '0') {
          this.X = 'Ajouter';
        }
        if (e === '1') {
          let idDemande= localStorage.getItem('idDemande');
          this.X = 'Modifier';
          this.service.retrieveDemandeAttesTravailById(+idDemande).subscribe(
            data => { this.demandeattestationtravail = data; },
            error => { console.log('error'); });
        }
    }
    onAddTM() {
      let e = localStorage.getItem('e');
  
      if (e === '0') {
        this.service.addDemandeAttesTravail(this.demandeattestationtravail).subscribe(
          data => { localStorage.removeItem('e');
          this.router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
          this.router.navigate(['/pages/demandeattestationtravail']));  
          this.toastr.success('', 'Ajouté avec succès'); 
          this.windowRef.close(); },
          error => {
            console.log('error');
          });
      }
      if (e === '1') {
        this.service.updateDemandeAttesTravail(this.demandeattestationtravail).subscribe(
          data => {
            localStorage.removeItem('e');
            this.router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
            this.router.navigate(['/pages/demandeattestationtravail'])); 
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
