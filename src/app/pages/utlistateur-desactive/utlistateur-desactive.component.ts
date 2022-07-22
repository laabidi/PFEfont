import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbWindowService } from '@nebular/theme';
import { Utilisateur } from '../utilisateur/utilisateur';
import { UtilisateurService } from '../utilisateur/utilisateur.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'ngx-utlistateur-desactive',
  templateUrl: './utlistateur-desactive.component.html',
  styleUrls: ['./utlistateur-desactive.component.scss']
})
export class UtlistateurDesactiveComponent implements OnInit {

  
  public source: any;
  utilisateur: Utilisateur ;
  static currentUser: any;
  static role_user : String;
  static isAdmin:Boolean;
  hhh : boolean;
  constructor(private token: TokenStorageService,protected service: UtilisateurService,private windowService: NbWindowService,private router: Router) { }

  ngOnInit() {
    UtlistateurDesactiveComponent.currentUser = this.token.getUser();
    UtlistateurDesactiveComponent.role_user = UtlistateurDesactiveComponent.currentUser["roles"][0];
    if(UtlistateurDesactiveComponent.role_user=="ROLE_ADMIN"){
      this.hhh=true;
      this.service.UtilisateurListD().subscribe(
        data => { this.source = data; 
        },
        error => { console.log("i'm heeeere"); }
      )

    }
    else{this.router.navigate(['/pages/login']); 
    window.confirm(`Vous devez connecter en tant qu'administrateur pour y acceder`) ; }
    
  }

  settings = {
    actions: {
      add: false,
      edit: false,
      position: 'right',
      custom: [
       
        {
          name: 'Activer',
          title: '<i class="nb-checkmark-circle" title="Activer" ></i>',

        },

      ],

    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {      
     
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
    
    if (event.action === 'Activer') {
      this.utilisateur=new Utilisateur();
      this.service.retrieveUtilisateur(+event.data.id).subscribe(
        data => { this.utilisateur = data; },
        error => { console.log('error'); });

      this.service.activerUtilisateur(this.utilisateur,+event.data.id).subscribe(
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