import { DemandecongeService } from './../demande-conge/demandeconge.service';
import { demandeconge } from './../demande-conge/demandeconge/demandeconge';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbToastrService, NbWindowRef } from '@nebular/theme';
@Component({
  selector: 'ngx-demandeconge-modal',
  templateUrl: './demandeconge-modal.component.html',
  styleUrls: ['./demandeconge-modal.component.scss']
})
export class DemandecongeModalComponent implements OnInit {
  demandeconge :demandeconge;
  X: string;
  constructor(public windowRef: NbWindowRef, 
    private service: DemandecongeService, private router: Router,private toastr: NbToastrService) { }

  ngOnInit() {
    let e = localStorage.getItem('e');
  
      this.demandeconge = new demandeconge();
      if (e === '0') {
        this.X = 'Ajouter';
      }
      if (e === '1') {
        let idDemande= localStorage.getItem('idDemande');
        this.X = 'Modifier';
        this.service.retrieveLeave(+idDemande).subscribe(
          data => { this.demandeconge = data; },
          error => { console.log('error'); });
      }
  }
  onAddTM() {
    let e = localStorage.getItem('e');

    if (e === '0') {
      this.service.addLeave(this.demandeconge).subscribe(
        data => { localStorage.removeItem('e');
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
        this.router.navigate(['/pages/demandeconge']));  
        this.toastr.success('', 'Ajouté avec succès'); 
        this.windowRef.close(); },
        error => {
          console.log('error');
        });
    }
    if (e === '1') {
      this.service.updateLeave(this.demandeconge).subscribe(
        data => {
          localStorage.removeItem('e');
          this.router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
          this.router.navigate(['/pages/demandeconge'])); 
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
