import { DemandeinfopersoService } from './../demandeinfoperso/demandeinfoperso.service';
import { demandeinforperso } from './../demandeinfoperso/dip';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbWindowService } from '@nebular/theme';

@Component({
  selector: 'ngx-demandeinfoperso-desactive',
  templateUrl: './demandeinfoperso-desactive.component.html',
  styleUrls: ['./demandeinfoperso-desactive.component.scss']
})
export class DemandeinfopersoDesactiveComponent implements OnInit {
  public source: any;
  demandeinforperso: demandeinforperso;
  idDemande : number;
  constructor(protected service: DemandeinfopersoService,private windowService: NbWindowService,private router: Router) { }

  ngOnInit(): void {this.service.infopersoListDesactive().subscribe(
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
    
    employerInfosPersoRhDemLibelle: {
      title: 'Libelle',
      type: 'number',
      filter: true,

    },
    employerInfosPersoRhDemMatricule: {
      title: 'Matricule',
      type: 'String',
      filter: true,

    },
    employerInfosPersoRhDemUsername: {
      title: 'Nom',
      type: 'String',
      filter: true,

    },
    employerInfosPersoRhDemAdress: {
      title: 'Adresse',
      type: 'String',
      filter: true,

    },
    employerInfosPersoRhDemCity: {
      title: 'Région',
      type: 'String',
     filter: true,

    },
    employerInfosPersoRhDemCountry: {
     title: 'Pays',
    type: 'String',
      filter: true,

   },
   employerInfosPersoRhDemCodePostal: {
      title: 'Code Postale',
      type: 'number',
      filter: true,

    },
    employerInfosPersoRhDemPhone: {
      title: 'Téléphone',
      type: 'number',
      filter: true,
 
    },
    employerInfosPersoRhDemEmail: {
      title: 'Email',
      type: 'String',
      filter: true,
 
    },
    employerInfosPersoRhDemBanque: {
      title: 'Banque',
      type: 'String',
      filter: true,
 
    },
    employerInfosPersoRhDemRib: {
      title: 'RIB',
      type: 'number',
      filter: true,
 
    },


  },
  
    
    
}


onDeleteConfirm(event): void {
  if (window.confirm(`Vous etes sure de supprimer cette demande?`)) {
    event.confirm.resolve(this.service.deletePersoInforModif(event.data.idDemande).subscribe(
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
    this.demandeinforperso=new demandeinforperso();

    this.service.getOnePersoInforModif(+event.data.idDemande).subscribe(
      data => { this.demandeinforperso = data; },
      error => { console.log('error'); });

    this.service.activerLeave(this.demandeinforperso,+event.data.idDemande).subscribe(
      data => {
        localStorage.removeItem('e');
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
        this.router.navigate(['/pages/demandeinfopersoDesactive']));  
                
      },
      error  => { console.log('error'); });
  }

  }

  tabs: any[] = [

    {
      title: 'Demandes traitée',
      route: '/pages/demandeinfopersoActive' ,
    },
    {
      title: 'Demandes non traitée',
      route: '/pages/demandeinfopersoDesactive' ,
    },
    
    
  ];

}

