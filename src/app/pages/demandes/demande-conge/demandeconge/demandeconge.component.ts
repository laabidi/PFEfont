import { DemandecongeModalComponent } from './../../demandeconge-modal/demandeconge-modal.component';
import { DemandecongeService } from './../demandeconge.service';
import { Component, OnInit } from '@angular/core';
import { demandeconge } from './demandeconge';
import { TokenStorageService } from '../../../_services/token-storage.service';
import { Router } from '@angular/router';
import { NbWindowService } from '@nebular/theme';



@Component({
  selector: 'ngx-demandeconge',
  templateUrl: './demandeconge.component.html',
  styleUrls: ['./demandeconge.component.scss']
})
export class DemandecongeComponent implements OnInit {
  public source: any;
  demandeconge: demandeconge;
  idDemande: number;
  static currentUser: any;
  static role_user : String;
  static isAdmin:Boolean;
  admin : boolean;
  user : boolean;
  leaves: any[];
  constructor(private token: TokenStorageService,
    protected service: DemandecongeService,
    private windowService: NbWindowService,
    private router: Router) { }

  ngOnInit(){
    DemandecongeComponent.currentUser = this.token.getUser();
    DemandecongeComponent.role_user = DemandecongeComponent.currentUser["roles"][0];
    if(DemandecongeComponent.role_user=="ROLE_ADMIN"){
      this.admin=true;

    }else {this.settings.actions =  null;
      this.settings.delete =  null;
      this.user = true;

    }
    this.service.getAllleaves().subscribe(response=>{
      console.log(response);
      this.leaves= response
    })

    
  }

  settings = {
    actions: {
      add: false,
      edit: false,
      position: 'right',
      custom: [
        {
          name: 'showAction',
          title: '<i class="nb-sunny" title="Show" ></i>',
        },
        {
          name: 'editAction',
          title: '<i class="nb-edit" title="Edit" ></i>',

        },
        {
          name: 'desactiver',
          title: '<i class="nb-close-circled" title="desactiver" ></i>',

        },
       
      ],


     
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
    
      employerInfosRhDemTypeId: {
        title: 'Code',
        type: 'number',
        filter: true,
      },
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
      employerCongesDemTachesDele: {
       title: 'Délégation',
       type: 'String',
       filter: true,

     },
      yerCongesDemStatut: {
        title: 'Status',
        type: 'String',
        filter: true,

      },
      employerCongesDemDate: {
        title: 'Date',
        type: 'date',
        filter: true,

      },
      
   

  }}

  addDossier() {
    localStorage.setItem("e", "0");
    this.windowService.open(DemandecongeModalComponent, { title: `Ajouter une demande` });
  }

  onDeleteConfirm(event): void {
    if (window.confirm(`Vous etes sure de supprimer cette demande?`)) {
      event.confirm.resolve(this.service.deleteLeave(event.data.idDemande).subscribe(
        data => { this.source.filter(p => p !== event.data); }
      ),
      );
    } else {
      event.confirm.reject();
    }
  }


  onCostum(event): any {
    if (event.action === 'editAction') {
      console.log(event.data.idDemande);
      localStorage.setItem("e", "1");
      localStorage.setItem('idDemande', event.data.idDemande.toString());
      this.windowService.open(DemandecongeModalComponent, { title: 'Modifier demande', context: event.data.idDemande });
    }
    if (event.action === 'showAction') {
      console.log(event.data.idDemande);
      localStorage.setItem('idDemande', event.data.idDemande.toString());
      this.windowService.open(DemandecongeComponent, { title: 'Afficher demande', context: event.data.idDemande });
    }
   
    if (event.action === 'desactiver') {
      console.log(event.data.idDemande);
      let idDemande= localStorage.getItem('idDemande');
      this.demandeconge=new demandeconge();

      this.service.retrieveLeave(+event.data.idDemande).subscribe(
        data => { this.demandeconge = data; },
        error => { console.log('error'); });

        this.service.desactiverLeave(this.demandeconge,+event.data.idDemande).subscribe(
          data => {
            this.router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
            this.router.navigate(['/pages/demandeconge']));  
                    
          },
          error => { console.log('error'); });
      }
      

    }
    
    tabs: any[] = [
  
      {
        title: 'Demandes traitées',
        route: '/pages/demandeconge' ,
      },
      {
        title: 'Demandes désactives',
        route: '/pages/demandecongeDesactive' ,
      },
      
      
    ];

    onConfirmer() {
      this.router.navigate(['/pages/demandeconge']);
      }
      
   

   
}


