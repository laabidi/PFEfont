import { DemandecongeService } from './../demande-conge/demandeconge.service';
import { demandeconge } from './../demande-conge/demandeconge/demandeconge';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbWindowService } from '@nebular/theme';
@Component({
  selector: 'ngx-demandeconge-desactive',
  templateUrl: './demandeconge-desactive.component.html',
  styleUrls: ['./demandeconge-desactive.component.scss']
})
export class DemandecongeDesactiveComponent implements OnInit {
  public source: any;
  demandeconge: demandeconge;
  idDemande : number;
  constructor(protected service: DemandecongeService,private windowService: NbWindowService,private router: Router) { }
 
  ngOnInit(): void {
    this.service.leaveListDesactive().subscribe(
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
      event.confirm.resolve(this.service.deleteLeave(event.data.idProduit).subscribe(
        data => { this.source.filter(p => p !== event.data); }
      ),
      );
    } else {
      event.confirm.reject();
    }
  }


  onCostum(event): any {
   
    if (event.action === 'Activer') {
      console.log(event.data.idDemande);
      let idDemande= localStorage.getItem('idDemande');
      this.demandeconge=new demandeconge();

      this.service.retrieveLeave(+event.data.idDemande).subscribe(
        data => { this.demandeconge = data; },
        error => { console.log('error'); });

      this.service.activerLeave(this.demandeconge,+event.data.idDemande).subscribe(
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
        route: '/pages/demandeconge' ,
      },
      {
        title: 'Demandes non traitée',
        route: '/pages/demandecongeDesactive' ,
      },
      
      
    ];

}
