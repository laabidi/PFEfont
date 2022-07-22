import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PagesComponent } from '../pages.component';
import { Utilisateur } from './utilisateur';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  url =  PagesComponent.urlProjet+ '/utilisateurs';
  url1 =  PagesComponent.urlProjet+ '/utilisateursActive';
  url2 =  PagesComponent.urlProjet+ '/utilisateursDesactive';

   
  
  constructor(private httpClient: HttpClient) { }

  UtilisateurList() {
    return this.httpClient.get<Utilisateur[]>(this.url);
  }
  UtilisateurListA() {
    return this.httpClient.get<Utilisateur[]>(this.url1);
  }
  UtilisateurListD() {
    return this.httpClient.get<Utilisateur[]>(this.url2);
  }
  
  retrieveUtilisateur(idUtilisateur: number)
  {return this.httpClient.get<Utilisateur>(this.url + "/" + idUtilisateur);}

  addUtilisateur(utilisateur : Utilisateur){
    return this.httpClient.post(this.url , utilisateur);
  }
  
  updateUtilisateur(utilisateur:Utilisateur){
    return this.httpClient.put(this.url + "/" + utilisateur.id, utilisateur);
  }
  activerUtilisateur(utilisateur:Utilisateur,idUser:number){
    return this.httpClient.put(this.url1 + "/" + idUser, utilisateur);
  }
  desactiverUtilisateur(utilisateur:Utilisateur,idUser:number){
    return this.httpClient.put(this.url2 + "/" + idUser, utilisateur);
  }

  deleteUtilisateur(idens :number){
    return this.httpClient.delete(this.url + "/" + idens);
  }

}