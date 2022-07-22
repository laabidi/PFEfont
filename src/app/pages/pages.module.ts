import { DemandecongeShowComponent } from './demandes/demande-conge/demandeconge/demandeconge-show/demandeconge-show.component';
import { NgModule } from '@angular/core';
import { NbActionsModule, NbButtonModule, NbCardModule, NbCheckboxModule, NbDatepickerModule, NbIconModule, NbInputModule, NbMenuModule, NbRadioModule, NbRouteTabsetModule, NbSelectModule, NbTabsetModule, NbTreeGridModule, NbUserModule, NbWindowModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { FormsModule } from '@angular/forms';
import { TablesRoutingModule } from './tables/tables-routing.module';
import { FormsRoutingModule } from './forms/forms-routing.module';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { UtilisateurModalComponent } from './utilisateur/utilisateur-modal/utilisateur-modal.component';
import { UtilisateurShowComponent } from './utilisateur/utilisateur-show/utilisateur-show.component';

import { UtlistateurDesactiveComponent } from './utlistateur-desactive/utlistateur-desactive.component';


import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';

import { LogoutComponent } from './logout/logout.component';
import { FormulaireEditYComponent } from './formulaire-edit-y/formulaire-edit-y.component';
import { FormulaireViewComponent } from './formulaire-view/formulaire-view.component';
import { DemandecongeComponent } from './demandes/demande-conge/demandeconge/demandeconge.component';
import { DemandecongeModalComponent } from './demandes/demandeconge-modal/demandeconge-modal.component';
import { DemandeattestationtravailComponent } from './demandes/demande-attestation-travail/demandeattestationtravail/demandeattestationtravail.component';
import { DemandeattestationtravailShowComponent } from './demandes/demande-attestation-travail/demandeattestationtravail-show/demandeattestationtravail-show.component';
import { DemandeattestationtravailModalComponent } from './demandes/demande-attestation-travail/demandeattestationtravail-modal/demandeattestationtravail-modal.component';
import { DemandeinfopersoComponent } from './demandes/demandeinfoperso/demandeinfoperso/demandeinfoperso.component';
import { DemandeinfopersoShowComponent } from './demandes/demandeinfoperso/demandeinfoperso-show/demandeinfoperso-show.component';
import { DemandeinfopersoModalComponent } from './demandes/demandeinfoperso/demandeinfoperso-modal/demandeinfoperso-modal.component';
import { DemandecongeDesactiveComponent } from './demandes/demandeconge-desactive/demandeconge-desactive.component';
import { DemandeattesttravailDesactiveComponent } from './demandes/demandeattesttravail-desactive/demandeattesttravail-desactive.component';
import { DemandeinfopersoDesactiveComponent } from './demandes/demandeinfoperso-desactive/demandeinfoperso-desactive.component';
import { ConsulationfichepaieComponent } from './consultation/consulationfichepaie/consulationfichepaie.component';

@NgModule({
  imports: [PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    ECommerceModule,
    MiscellaneousModule,
    Ng2SmartTableModule,
    FormsModule,
    NbCardModule,
    NbTreeGridModule,
    NbIconModule,
    NbInputModule,
    TablesRoutingModule,
    NbWindowModule.forChild(),
    NbWindowModule.forRoot(),
    NbButtonModule,
    NbActionsModule,
    NbUserModule,
    NbCheckboxModule,
    NbRadioModule,
    NbDatepickerModule,
    FormsRoutingModule,
    NbSelectModule,
    NbTabsetModule,
    NbRouteTabsetModule,
  ],
  declarations: [
    PagesComponent,
    UtilisateurComponent,
    UtilisateurModalComponent,
    UtilisateurShowComponent,
   
    UtlistateurDesactiveComponent,
    
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardUserComponent,
    LogoutComponent,
    FormulaireEditYComponent,
    FormulaireViewComponent,
    DemandecongeComponent,
    DemandecongeModalComponent,
    DemandecongeShowComponent,
    DemandeattestationtravailComponent,
    DemandeattestationtravailShowComponent,
    DemandeattestationtravailModalComponent,
    DemandeinfopersoComponent,
    DemandeinfopersoShowComponent,
    DemandeinfopersoModalComponent,
    DemandecongeDesactiveComponent,
    DemandeattesttravailDesactiveComponent,
    DemandeinfopersoDesactiveComponent,
    ConsulationfichepaieComponent,
    
  ],
})
export class PagesModule {
}
