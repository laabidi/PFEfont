import { Component, OnInit } from '@angular/core';
import { demandeconge } from '../demandeconge';
import { NbWindowRef } from '@nebular/theme';
import { Router } from '@angular/router';
import { DemandecongeService } from './../../demandeconge.service';

@Component({
  selector: 'ngx-demandeconge-show',
  templateUrl: './demandeconge-show.component.html',
  styleUrls: ['./demandeconge-show.component.scss']
})
export class DemandecongeShowComponent implements OnInit {

 
  demandeconge: demandeconge;
 
  constructor(private DemandecongeService : DemandecongeService,public windowRef: NbWindowRef,  private router: Router) { }

  ngOnInit(){
    this.demandeconge = new demandeconge();      
    let idDemande = localStorage.getItem("idDemande");
    this.DemandecongeService.retrieveLeave(+idDemande).subscribe(
      data =>{this.demandeconge = data;},
      error =>{console.log(error);}
      );
  }

}
