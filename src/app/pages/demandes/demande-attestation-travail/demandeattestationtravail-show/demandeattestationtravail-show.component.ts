import { DemandeattestationtravailService } from './../demandeattestationtravail.service';
import { demandeattestationtravail } from './../demandeattestationtravail';
import { Component, OnInit } from '@angular/core';
import { NbWindowRef } from '@nebular/theme';
import { Router } from '@angular/router';
@Component({
  selector: 'ngx-demandeattestationtravail-show',
  templateUrl: './demandeattestationtravail-show.component.html',
  styleUrls: ['./demandeattestationtravail-show.component.scss']
})
export class DemandeattestationtravailShowComponent implements OnInit {

  demandeattestationtravail: demandeattestationtravail;
  constructor(private DemandeattestationtravailService : DemandeattestationtravailService,public windowRef: NbWindowRef,  private router: Router) { }

  ngOnInit(): void {
    this.demandeattestationtravail = new demandeattestationtravail();      
    let idDemande = localStorage.getItem("idDemande");
    this.DemandeattestationtravailService.retrieveDemandeAttesTravailById(+idDemande).subscribe(
      data =>{this.demandeattestationtravail = data;},
      error =>{console.log(error);}
      );
  }

}
