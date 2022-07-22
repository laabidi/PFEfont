import { DemandeinfopersoModalComponent } from './../demandeinfoperso-modal/demandeinfoperso-modal.component';
import { DemandeinfopersoService } from './../demandeinfoperso.service';
import { Component, OnInit } from '@angular/core';
import { demandeinforperso} from './../dip';
import { TokenStorageService } from '../../../_services/token-storage.service';
import { Router } from '@angular/router';
import { NbWindowService } from '@nebular/theme';

@Component({
  selector: 'ngx-demandeinfoperso',
  templateUrl: './demandeinfoperso.component.html',
  styleUrls: ['./demandeinfoperso.component.scss']
})
export class DemandeinfopersoComponent implements OnInit {
  public source: any;
  demandeInforPerso: demandeinforperso;
  static currentUser: any;
  static role_user : String;
  static isAdmin:Boolean;
  admin : boolean;
  user : boolean;
  leaves: any[];
  constructor(private token: TokenStorageService,
    protected service: DemandeinfopersoService,
    private windowService: NbWindowService,
    private router: Router) { }

  ngOnInit(): void {
    DemandeinfopersoComponent.currentUser = this.token.getUser();
    DemandeinfopersoComponent.role_user = DemandeinfopersoComponent.currentUser["roles"][0];
    if(DemandeinfopersoComponent.role_user=="ROLE_ADMIN"){
      this.admin=true;

    }else {this.settings.actions =  null;
      this.settings.delete =  null;
      this.user = true;

    }
    this.service.getAllPersoInforModif().subscribe(response=>{
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
   

  }}

  addDossier() {
    localStorage.setItem("e", "0");
    this.windowService.open(DemandeinfopersoModalComponent, { title: `Ajouter une demande` });
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
    if (event.action === 'editAction') {
      console.log(event.data.idDemande);
      localStorage.setItem("e", "1");
      localStorage.setItem('idDemande', event.data.idDemande.toString());
      this.windowService.open(DemandeinfopersoModalComponent, { title: 'Modifier demande', context: event.data.idDemande });
    }
    if (event.action === 'showAction') {
      console.log(event.data.idDemande);
      localStorage.setItem('idProduit', event.data.idDemande.toString());
      this.windowService.open(DemandeinfopersoComponent, { title: 'Afficher demande', context: event.data.idDemande });
    }
   
      this.service.getOnePersoInforModif(+event.data.idDemande).subscribe(
        data => { this.demandeInforPerso = data; },
        error => { console.log('error'); });

      

    }
    
    tabs: any[] = [
  
      {
        title: 'Demandes traitées',
        route: '/pages/demandeinfopersoActive' ,
      },
      {
        title: 'Demandes désactives',
        route: '/pages/demandeinfopersoDesactive' ,
      },
      
      
    ];

    onConfirmer() {
      this.router.navigate(['/pages/demandeconge']);
      }
      

}
