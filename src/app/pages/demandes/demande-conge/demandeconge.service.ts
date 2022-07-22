import { demandeconge } from './demandeconge/demandeconge';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';




@Injectable({
  providedIn: 'root'
})
export class DemandecongeService {

  
   
  
  constructor(private httpClient: HttpClient) { }

  
  
  getAllleaves()
  {return this.httpClient.get<demandeconge[]>('http://localhost:9000/api/smartrh/retrieve-all-DemandeConges');}

  retrieveLeave(id: number)
  {return this.httpClient.get<demandeconge>('http://localhost:9000/api/smartrh/retrieve-DemandeConge/' + id);}


  addLeave(demandeconge : demandeconge){
    return this.httpClient.post('http://localhost:9000/api/smartrh/add-DemandeConge', demandeconge);
  }
  
  updateLeave(demandeconge : demandeconge){
    return this.httpClient.put('http://localhost:9000/api/smartrh/update-DemandeConge' + demandeconge.employerInfosRhDemTypeId, demandeconge);
  }
  

  deleteLeave(id :number){
    return this.httpClient.delete('http://localhost:9000/api/smartrh/delete-DemandeConge/' + id);
  }
  acceptDemande(idDeamnde:number){
    return this.httpClient.post('http://localhost:9000/api/smartrh/acceptedemande/'+idDeamnde,null);
  }
  activerLeave(demandeconge : demandeconge, idDemande:number){
    return this.httpClient.put('http://localhost:9000/api/smartrh/demandeCongesActives/' + idDemande, demandeconge);
  }
  desactiverLeave(demandeconge : demandeconge, idDemande:number){
    return this.httpClient.put('http://localhost:9000/api/smartrh/demandeCongesDesactives/'  + idDemande, demandeconge);
  }
  leaveListActive() {
    return this.httpClient.get<demandeconge[]>('http://localhost:9000/api/smartrh/demandecongeActives');
  }
  leaveListDesactive() {
    return this.httpClient.get<demandeconge[]>('http://localhost:9000/api/smartrh/demandecongeDesactives');
  }
}
