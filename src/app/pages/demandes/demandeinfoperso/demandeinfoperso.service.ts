import { demandeinforperso } from './dip';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemandeinfopersoService {

  constructor(private httpClient: HttpClient) { }

  getAllPersoInforModif()
  {return this.httpClient.get<demandeinforperso[]>('http://localhost:9000/api/smartrh/retrieve-all-DemandeInfoPerso');}

  getOnePersoInforModif(id: number)
  {return this.httpClient.get<demandeinforperso>('http://localhost:9000/api/smartrh/retrieve-DemandeInfoPerso/' + id);}


  addPersoInforModif(demandeinforperso : demandeinforperso){
    return this.httpClient.post('http://localhost:9000/api/smartrh/add-DemandeInfoPerso', demandeinforperso);
  }
  
  updatePersoInforModif(demandeinforperso : demandeinforperso){
    return this.httpClient.put('http://localhost:9000/api/smartrh/update-DemandeInfoPerso' + demandeinforperso.employerInfosPersoRhDemLibelle, demandeinforperso);
  }
  

  deletePersoInforModif(id :number){
    return this.httpClient.delete('http://localhost:9000/api/smartrh/delete-DemandeInfoPerso/' + id);
  }
  activerLeave(demandeconge : demandeinforperso, idDemande:number){
    return this.httpClient.put('http://localhost:9000/api/smartrh/activer-Demandeinforperso'+ idDemande, demandeconge);
  }
  desactiverLeave(demandeconge : demandeinforperso, idDemande:number){
    return this.httpClient.put('http://localhost:9000/api/smartrh/desactiver-Demandeinforperso'  + idDemande, demandeconge);
  }
  infopersoListActive() {
    return this.httpClient.get<demandeinforperso[]>('http://localhost:9000/api/smartrh/demandeinforpersoActive');
  }
  infopersoListDesactive() {
    return this.httpClient.get<demandeinforperso[]>('http://localhost:9000/api/smartrh/demandeinforpersoDesactive');
  }
}
