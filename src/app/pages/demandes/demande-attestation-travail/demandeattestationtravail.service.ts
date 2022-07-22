import { demandeattestationtravail } from './demandeattestationtravail';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DemandeattestationtravailService {

  

  constructor(private httpClient: HttpClient) { }
  retrieveAllDemandeAttesTravails()
  {return this.httpClient.get<demandeattestationtravail>('http://localhost:9000/api/smartrh/retrieve-all-DemandeAttesTravail');}

  retrieveDemandeAttesTravailById(id: number)
  {return this.httpClient.get<demandeattestationtravail>('http://localhost:9000/api/smartrh/retrieve-DemandeAttesTravail/{DemandeAttesTravail-id}' + id);}


  addDemandeAttesTravail(demandeattestationtravail : demandeattestationtravail){
    return this.httpClient.post('http://localhost:9000/api/smartrh/add-DemandeAttesTravail', demandeattestationtravail);
  }
  
  updateDemandeAttesTravail(demandeattestationtravail : demandeattestationtravail){
    return this.httpClient.put('http://localhost:9000/api/smartrh/update-DemandeAttesTravail' + demandeattestationtravail.employerAttesTravailDemId, demandeattestationtravail);
  }
  

  deleteDemandeAttesTravailById(id :number){
    return this.httpClient.delete('http://localhost:9000/api/smartrh/delete-DemandeAttesTravail/{DemandeAttesTravail-id}' + id);
  }
  activerLeave(demandeconge : demandeattestationtravail, idDemande:number){
    return this.httpClient.put('http://localhost:9000/api/smartrh/activer-DemandeAttesTravail'+ idDemande, demandeconge);
  }
  desactiverLeave(demandeconge : demandeattestationtravail, idDemande:number){
    return this.httpClient.put('http://localhost:9000/api/smartrh/desactiver-DemandeAttesTravail'  + idDemande, demandeconge);
  }
  leaveListActive() {
    return this.httpClient.get<demandeattestationtravail[]>('http://localhost:9000/api/smartrh/demandeAttesTravailActive');
  }
  leaveListDesactive() {
    return this.httpClient.get<demandeattestationtravail[]>('http://localhost:9000/api/smartrh/demandeAttesTravailDesactive');
  }
}
