import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from '../../../pages/_services/token-storage.service';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  templateUrl: './footer.component.html',
})
export class FooterComponent implements OnInit {
  static currentUser: any;
  static role_user : String;
  static isAdmin:Boolean;
  user: any
  hhh : boolean;
  constructor(
    private tokenStorageService:TokenStorageService,
    private router: Router)  {}
  ngOnInit(): void {
    FooterComponent.currentUser = this.tokenStorageService.getUser();
    FooterComponent.role_user = FooterComponent.currentUser["roles"][0];
    if(FooterComponent.role_user=="ROLE_ADMIN" || FooterComponent.role_user=="ROLE_USER"){
      this.hhh=true;
    }
  }
  reclamation(): void {
    this.router.navigate(['/pages/reclamation']).then(() => {
      window.location.reload();  });
   }
}
