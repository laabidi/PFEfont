import { DemandeattestationtravailModalComponent } from './../demandeattestationtravail-modal/demandeattestationtravail-modal.component';
import { DemandeattestationtravailService } from './../demandeattestationtravail.service';
import { demandeattestationtravail } from './../demandeattestationtravail';
import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../../../_services/token-storage.service';
import { Router } from '@angular/router';
import { NbWindowService } from '@nebular/theme';


@Component({
  selector: 'ngx-demandeattestationtravail',
  templateUrl: './demandeattestationtravail.component.html',
  styleUrls: ['./demandeattestationtravail.component.scss']
})
export class DemandeattestationtravailComponent implements OnInit {
  public source: any;
  demandeattestationtravail: demandeattestationtravail;
  idConge: number;
  static currentUser: any;
  static role_user : String;
  static isAdmin:Boolean;
  admin : boolean;
  user : boolean;
  leaves: any[];
  role:any;
  constructor(private token: TokenStorageService,
    protected service: DemandeattestationtravailService,
    private windowService: NbWindowService,
    private router: Router) { }

  ngOnInit(): void {
   // =sessionStorage.getItem("auth-user")    
    //this.role=(this.token.getUser())
    //console.log(this.role['roles'][0])
    DemandeattestationtravailComponent.currentUser = this.token.getUser();
    DemandeattestationtravailComponent.role_user = DemandeattestationtravailComponent.currentUser["roles"][0];
    if(DemandeattestationtravailComponent.role_user=="ROLE_ADMIN"){
      this.admin=true;

    }else {this.settings.actions =  null;
      this.settings.delete =  null;
      this.user = true;
      
    }
    this.service.retrieveAllDemandeAttesTravails().subscribe(response=>{
      console.log(response);
      this.source= response
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
    
      employerAttesTravailDemId: {
        title: 'Code',
        type: 'number',
        filter: true,
      },
      employerAttesTravailDemDate: {
        title: 'Date',
        type: 'date',
        filter: true,

      },
      
      employerAttesTravailStatus: {
        title: 'Status',
        type: 'String',
        filter: true,

      },

      //employerCongesDemDate: {
        //title: 'Attestation',
       // type: 'file',
       // filter: true,

     // },
      
   

  }}

  addDossier() {
    localStorage.setItem("e", "0");
    this.windowService.open(DemandeattestationtravailModalComponent, { title: `Ajouter une demande` });
  }

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
    if (event.action === 'editAction') {
      console.log(event.data.idDemande);
      localStorage.setItem("e", "1");
      localStorage.setItem('idDemande', event.data.idDemande.toString());
      this.windowService.open(DemandeattestationtravailModalComponent, { title: 'Modifier demande', context: event.data.idDemande });
    }
    if (event.action === 'showAction') {
      console.log(event.data.idDemande);
      localStorage.setItem('idProduit', event.data.idDemande.toString());
      this.windowService.open(DemandeattestationtravailComponent, { title: 'Afficher demande', context: event.data.idDemande });
    }
   
      this.service.retrieveDemandeAttesTravailById(+event.data.idDemande).subscribe(
        data => { this.demandeattestationtravail = data; },
        error => { console.log('error'); });

      

    }

    onConfirmer() {
      this.router.navigate(['/pages/demandeattestationtravail']);
      }
      

}
