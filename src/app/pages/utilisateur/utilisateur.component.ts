import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbWindowService } from '@nebular/theme';
import { TokenStorageService } from '../_services/token-storage.service';
import { Utilisateur } from './utilisateur';
import { UtilisateurModalComponent } from './utilisateur-modal/utilisateur-modal.component';
import { UtilisateurShowComponent } from './utilisateur-show/utilisateur-show.component';
import { UtilisateurService } from './utilisateur.service';

@Component({
  selector: 'ngx-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.scss']
})
export class UtilisateurComponent implements OnInit {

  public source: any;
  utilisateur: Utilisateur ;
  static currentUser: any;
  static role_user : String;
  static isAdmin:Boolean;
  hhh : boolean;
  constructor( private token: TokenStorageService,protected service: UtilisateurService,private windowService: NbWindowService,private router: Router) { }

  ngOnInit() {

    UtilisateurComponent.currentUser = this.token.getUser();
    UtilisateurComponent.role_user = UtilisateurComponent.currentUser["roles"][0];
    if(UtilisateurComponent.role_user=="ROLE_ADMIN"){
      this.hhh=true;
      this.service.UtilisateurListA().subscribe(
        data => { this.source = data; 
        },
        error => { console.log("i'm heeeere"); }
      )

    } else{this.router.navigate(['/pages/login']); 
    window.confirm(`Vous devez connecter en tant qu'administrateur pour y acceder`) ; }
    
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
      
      id: {
        title: 'ID Client',
        type: 'number',
        filter: true,
      },
    username: {
        title: 'username',
        type: 'String',
        filter: true,
      },
    
      email: {
        title: 'email',
        type: 'String',
        filter: true,

      },
      telephone: {
        title: 'Telephone',
        type: 'String',
        filter: true,
      },
      adresse: {
        title: 'Adresse',
        type: 'String',
        filter: true,
      },
   

  }}

  addDossier() {
    localStorage.setItem("e", "0");
    this.windowService.open(UtilisateurModalComponent, { title: `Ajouter un utilisateur` });
  }

  onDeleteConfirm(event): void {
    if (window.confirm(`Vous etes sure de supprimer cet utilisateur?`)) {
      event.confirm.resolve(this.service.deleteUtilisateur(event.data.id).subscribe(
        data => { this.source.filter(p => p !== event.data); }
      ),
      );
    } else {
      event.confirm.reject();
    }
  }


  onCostum(event): any {
    if (event.action === 'editAction') {
      console.log(event.data.id);
      localStorage.setItem("e", "1");
      localStorage.setItem('id', event.data.id.toString());
      this.windowService.open(UtilisateurModalComponent, { title: 'Modifier utilisateur', context: event.data.id });
    }
    if (event.action === 'showAction') {
      console.log(event.data.id);
      localStorage.setItem('id', event.data.id.toString());
      this.windowService.open(UtilisateurShowComponent, { title: 'Afficher utilisateur', context: event.data.id });
    }
    if (event.action === 'desactiver') {
      console.log(event.data.idProduit);
      let id= localStorage.getItem('id');
      this.utilisateur=new Utilisateur();

      this.service.retrieveUtilisateur(+event.data.id).subscribe(
        data => { this.utilisateur = data; },
        error => { console.log('error'); });

      this.service.desactiverUtilisateur(this.utilisateur,+event.data.id).subscribe(
        data => {
          this.router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
          this.router.navigate(['/pages/utilisateurActive']));  
                  
        },
        error => { console.log('error'); });
    }

    }

    tabs: any[] = [
  
      {
        title: 'Utilisateurs actives',
        route: '/pages/utilisateurActive' ,
      },
      {
        title: 'Utilisateurs désactives',
        route: '/pages/utilisateurDesactive' ,
      },
      
      
    ];

}