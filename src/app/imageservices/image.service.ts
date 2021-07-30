import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private jwtToken = localStorage.getItem('token'); 
  constructor(private httpClient:HttpClient) { }


  public getAllImages() {
    if (this.jwtToken == null) alert("Jwt not found, you should login before using this service")
    return this.httpClient.get(environment.host+"/images",{headers:new HttpHeaders({'Authorization':this.jwtToken})}); 
  }

  public saveImage(image) {
    if (this.jwtToken == null) alert("Jwt not found, you should login before using this service")
    return this.httpClient.post(environment.host+"/images",image,{headers:new HttpHeaders({'Authorization':this.jwtToken})}); 
  } 

  public findImageByImageId(id) {
    if (this.jwtToken == null) alert("Jwt not found, you should login before using this service")
    return this.httpClient.get(environment.host+"/images/"+id,{headers:new HttpHeaders({'Authorization':this.jwtToken})});
  }

  public editImage(id,image) {
    if (this.jwtToken == null) alert("Jwt not found, you should login before using this service")
    return this.httpClient.put(environment.host+"/images"+id,image,{headers:new HttpHeaders({'Authorization':this.jwtToken})});
  }

  public deleteImageByImageId(id) {
    if (this.jwtToken == null) alert("Jwt not found, you should login before using this service")
    return this.httpClient.delete(environment.host+"/images/"+id,{headers:new HttpHeaders({'Authorization':this.jwtToken})});
  }
}
