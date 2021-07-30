import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PetService {
  private jwtToken= localStorage.getItem('token'); 
  constructor(private httpClient:HttpClient) { }

  public getAllPets() {
    console.log("Token is ",this.jwtToken);
    if (this.jwtToken != null) {
    return this.httpClient.get(environment.host+"/pets",{headers:new HttpHeaders({'Authorization':this.jwtToken})}); 
    } else {
      alert("NO TOKEN");
    }
  }


  public savePet(pet) {
    if (this.jwtToken == null) alert("Jwt not found, you should login before using this service")
    return this.httpClient.post(environment.host+"/pets",pet); 
  } 

  public findPetByPetId(id) {
    if (this.jwtToken == null) alert("Jwt not found, you should login before using this service")
    return this.httpClient.get(environment.host+"/pets/"+id);
  }

  public editPet(id,pet) {
    if (this.jwtToken == null) alert("Jwt not found, you should login before using this service")
    return this.httpClient.put(environment.host+"/pets"+id,pet);
  }

  public deletePetByPetId(id) {
    if (this.jwtToken == null) alert("Jwt not found, you should login before using this service")
    return this.httpClient.delete(environment.host+"/pets/"+id);
  }
}
