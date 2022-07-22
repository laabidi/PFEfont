import { DemandeattestationtravailService } from './../demande-attestation-travail/demandeattestationtravail.service';
import { demandeattestationtravail } from './../demande-attestation-travail/demandeattestationtravail';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbWindowService } from '@nebular/theme';
@Component({
  selector: 'ngx-demandeattesttravail-desactive',
  templateUrl: './demandeattesttravail-desactive.component.html',
  styleUrls: ['./demandeattesttravail-desactive.component.scss']
})
export class DemandeattesttravailDesactiveComponent implements OnInit {
  public source: any;
  demandeattestationtravail: demandeattestationtravail;
  idDemande : number;
  
  constructor(protected service: DemandeattestationtravailService,
    private windowService: NbWindowService,private router: Router) { }

  ngOnInit(): void {this.service.leaveListDesactive().subscribe(
    data => { this.source = data; 
    },
    error => { console.log("i'm heeeere"); }
  )
}

settings = {
  actions: {
    add: false,
    edit: false,
    position: 'right',
    custom: [
      
      {
        name: 'activer',
        title: '<i class="nb-checkmark-circle" title="activer" ></i>',

      },

    ],

  },
  delete: {
    deleteButtonContent: '<i class="nb-trash"></i>',
    confirmDelete: true,
  },
  columns: {
    
    employerCongesDemDateDeb: {
      title: 'Date Début',
      type: 'date',
      filter: true,

    },
    employerCongesDemDateFin: {
      title: 'Date Fin',
      type: 'date',
      filter: true,

    },
    employerCongesDemNbrJrs: {
      title: 'Nbr jours',
      type: 'number',
      filter: true,

    },
    employerCongesDemMotif: {
      title: 'Motif',
      type: 'String',
      filter: true,

    },
   // employerCongesDemTachesDele: {
     // title: 'Délégation',
    //  type: 'String',
    //  filter: true,

   // },
    //yerCongesDemStatut: {
     // title: 'Status',
    //  type: 'String',
    //  filter: true,

   // },
    employerCongesDemDate: {
      title: 'Date',
      type: 'date',
      filter: true,

    },
    
}}


onDeleteConfirm(event): void {
  if (window.confirm(`Vous etes sure de supprimer cette demande?`)) {
    event.confirm.resolve(this.service.deleteDemandeAttesTravailById(event.data.idDemande).subscribe(
      data => { this.source.filter(p => p !== event.data); }
    ),
    );
  } else {
    event.confirm.reject();
  }
}


onCostum(event): any {
 
  if (event.action === 'activer') {
    console.log(event.data.idDemande);
    let idDemande= localStorage.getItem('idDemande');
    this.demandeattestationtravail=new demandeattestationtravail();

    this.service.retrieveDemandeAttesTravailById(+event.data.idDemande).subscribe(
      data => { this.demandeattestationtravail = data; },
      error => { console.log('error'); });

    this.service.activerLeave(this.demandeattestationtravail,+event.data.idDemande).subscribe(
      data => {
        localStorage.removeItem('e');
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
        this.router.navigate(['/pages/demandecongeDesactive']));  
                
      },
      error  => { console.log('error'); });
  }

  }

  tabs: any[] = [

    {
      title: 'Demandes traitée',
      route: '/pages/demandecongeActive' ,
    },
    {
      title: 'Produits non traitée',
      route: '/pages/demandecongeDesactive' ,
    },
    
    
  ];
  }


