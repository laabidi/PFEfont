import { Component, OnInit } from '@angular/core';
import { ADMIN_MENU_ITEMS,USER_MENU_ITEMS } from './pages-menu';
import { TokenStorageService } from './_services/token-storage.service';


@Component({
  selector: 'ngx-pages',
  styleUrls: ['pages.component.scss'],
  template: `
    <ngx-one-column-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `,
})
export class PagesComponent implements OnInit{

  menu ;
  public static urlProjet = 'http://localhost:9000'; 
 
  constructor(private tokenservice: TokenStorageService){}
  ngOnInit(): void {
    console.log(this.tokenservice.getUser())
    if (this.tokenservice.getUser().roles.some(item => item === 'ROLE_ADMIN')) this.menu =  ADMIN_MENU_ITEMS ;
      else this.menu = USER_MENU_ITEMS ; 
  }

}
