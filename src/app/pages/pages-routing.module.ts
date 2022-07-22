import { ConsulationfichepaieComponent } from './consultation/consulationfichepaie/consulationfichepaie.component';
import { DemandeattesttravailDesactiveComponent } from './demandes/demandeattesttravail-desactive/demandeattesttravail-desactive.component';
import { DemandeinfopersoDesactiveComponent } from './demandes/demandeinfoperso-desactive/demandeinfoperso-desactive.component';
import { DemandecongeDesactiveComponent } from './demandes/demandeconge-desactive/demandeconge-desactive.component';
import { DemandeinfopersoComponent } from './demandes/demandeinfoperso/demandeinfoperso/demandeinfoperso.component';
import { DemandeattestationtravailComponent } from './demandes/demande-attestation-travail/demandeattestationtravail/demandeattestationtravail.component';

import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';

import { UtilisateurComponent } from './utilisateur/utilisateur.component';

import { UtilisateurModalComponent } from './utilisateur/utilisateur-modal/utilisateur-modal.component';
import { UtlistateurDesactiveComponent } from './utlistateur-desactive/utlistateur-desactive.component';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';


import { DemandecongeComponent } from './demandes/demande-conge/demandeconge/demandeconge.component';
import { UtilisateurShowComponent } from './utilisateur/utilisateur-show/utilisateur-show.component';
import { LogoutComponent } from './logout/logout.component';
import { FormulaireEditYComponent } from './formulaire-edit-y/formulaire-edit-y.component';
import { FormulaireViewComponent } from './formulaire-view/formulaire-view.component';
import { demandeinforperso } from './demandes/demandeinfoperso/dip';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'dashboard',
      component: ECommerceComponent,
    },
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'user', component: BoardUserComponent },
    { path: 'mod', component: BoardModeratorComponent },
    { path: 'admin', component: BoardAdminComponent },
    
    
    {
      path:'demandeconge', 
      component: DemandecongeComponent,
    },
    {
      path:'demandecongeDesactive', 
      component: DemandecongeDesactiveComponent,
    },
    {
      path: 'demandeattestationtravailDesactive',
      component: DemandeattesttravailDesactiveComponent,
    },
    {
      path:'demandeinfopersoDesactive',
      component: DemandeinfopersoDesactiveComponent,
    },
    
    {
      path:'demandeattestationtravail',
      component: DemandeattestationtravailComponent,
    },
    {
      path: 'demandeinfoperso',
      component: DemandeinfopersoComponent,
    },
    
    {
      path: 'consultationfichepaie',
      component: ConsulationfichepaieComponent,
    },

    {
      path: 'utilisateurActive',
      component: UtilisateurComponent,
    },
    {
      path: 'utilisateurDesactive',
      component: UtlistateurDesactiveComponent,
    },
    {
      path: 'logout',
      component: LogoutComponent,
    },
    {
      path: 'formulaire',
      component: FormulaireEditYComponent,
    },
    
    {
      path: 'form',
      component: FormulaireViewComponent,
    },



    {
      path: 'iot-dashboard',
      component: DashboardComponent,
    },
    {
      path: 'layout',
      loadChildren: () => import('./layout/layout.module')
        .then(m => m.LayoutModule),
    },
    {
      path: 'forms',
      loadChildren: () => import('./forms/forms.module')
        .then(m => m.FormsModule),
    },
    {
      path: 'ui-features',
      loadChildren: () => import('./ui-features/ui-features.module')
        .then(m => m.UiFeaturesModule),
    },
    {
      path: 'modal-overlays',
      loadChildren: () => import('./modal-overlays/modal-overlays.module')
        .then(m => m.ModalOverlaysModule),
    },
    {
      path: 'extra-components',
      loadChildren: () => import('./extra-components/extra-components.module')
        .then(m => m.ExtraComponentsModule),
    },
    {
      path: 'maps',
      loadChildren: () => import('./maps/maps.module')
        .then(m => m.MapsModule),
    },
    {
      path: 'charts',
      loadChildren: () => import('./charts/charts.module')
        .then(m => m.ChartsModule),
    },
    {
      path: 'editors',
      loadChildren: () => import('./editors/editors.module')
        .then(m => m.EditorsModule),
    },
    {
      path: 'tables',
      loadChildren: () => import('./tables/tables.module')
        .then(m => m.TablesModule),
    },
    {
      path: 'miscellaneous',
      loadChildren: () => import('./miscellaneous/miscellaneous.module')
        .then(m => m.MiscellaneousModule),
    },
    {
      path: '',
      redirectTo: 'login',
      pathMatch: 'full',
    },
    {
      path: '**',
      component: NotFoundComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
