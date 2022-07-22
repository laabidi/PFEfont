import { Component, OnDestroy, OnInit } from '@angular/core';
import { NbMediaBreakpointsService, NbMenuService, NbSidebarService, NbThemeService } from '@nebular/theme';

import { UserData } from '../../../@core/data/users';
import { LayoutService } from '../../../@core/utils';
import { map, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { TokenStorageService } from '../../../pages/_services/token-storage.service';
import { Router } from '@angular/router';
import { Utilisateur } from '../../../pages/utilisateur/utilisateur';
import { UtilisateurService } from '../../../pages/utilisateur/utilisateur.service';

import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit, OnDestroy {
  utilisateur: Utilisateur ;
  static currentUser: any;
  static role_user : String;
  static isAdmin:Boolean;
  user: any
  hhh : boolean;
  currentPath: string = this.router.url;
  hide: boolean = true;
  private destroy$: Subject<void> = new Subject<void>();
  userPictureOnly: boolean = false;

  themes = [
    {
      value: 'default',
      name: 'Light',
    },
    {
      value: 'dark',
      name: 'Dark',
    },
    {
      value: 'cosmic',
      name: 'Cosmic',
    },
    {
      value: 'corporate',
      name: 'Corporate',
    },
  ];

  currentTheme = 'default';

  userMenu = [ 
    { title: 'EDITER PROFILE' ,
      icon: 'edit-2-outline',
      link: '/pages/formulaire' },
    { title: 'AFFICHER PROFILE',
      icon: 'file-text-outline',
      link: '/pages/form' } ,
   /* { title: 'Déconnecter',
    link: '/pages/logout' } */
  ];

  constructor(private sidebarService: NbSidebarService,
              private menuService: NbMenuService,
              private themeService: NbThemeService,
              private userService: UserData,
              private layoutService: LayoutService,
              private breakpointService: NbMediaBreakpointsService,
              private tokenStorageService:TokenStorageService,
              private router: Router,
              private service: UtilisateurService
              ) {
  }

  ngOnInit() {
    console.log(this.currentPath);
    if (this.currentPath == "/pages/login"){
      this.hide = false;
    }

    this.utilisateur = new Utilisateur();
        
        let idUser= localStorage.getItem('idUser');
        
        this.service.retrieveUtilisateur(+idUser).subscribe(
          data => { this.utilisateur = data; },
          error => { console.log('error'); });




    this.userService.getUsers()
    .pipe(takeUntil(this.destroy$))
    .subscribe((users: any) => this.user = users.nick);
    const { xl } = this.breakpointService.getBreakpointsMap();
    this.themeService.onMediaQueryChange()
      .pipe(
        map(([, currentBreakpoint]) => currentBreakpoint.width < xl),
        takeUntil(this.destroy$),
      )
      .subscribe((isLessThanXl: boolean) => this.userPictureOnly = isLessThanXl);
    this.themeService.onThemeChange()
      .pipe(
        map(({ name }) => name),
        takeUntil(this.destroy$),
      )
      .subscribe(themeName => this.currentTheme = themeName);
    this.currentTheme = this.themeService.currentTheme;
    
    HeaderComponent.currentUser = this.tokenStorageService.getUser();
    HeaderComponent.role_user = HeaderComponent.currentUser["roles"][0];
    if(HeaderComponent.role_user=="ROLE_ADMIN" || HeaderComponent.role_user=="ROLE_USER"){
      this.hhh=true;
    }
}

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  changeTheme(themeName: string) {
    this.themeService.changeTheme(themeName);
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    this.layoutService.changeLayoutSize();

    return false;
  }

  navigateHome() {
    this.menuService.navigateHome();
    return false;
  }

  logout(): void {
    this.tokenStorageService.signOut();
    this.router.navigate(['/pages/login']).then(() => {
      window.location.reload();
    }); 
    
   }

  
}