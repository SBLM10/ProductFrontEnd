import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Product} from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {}




  getProduct(){
    let headers =  new HttpHeaders();
    headers = headers.set('Authorization', localStorage.getItem('token'));
  return this.http.get<Product[]>('http://localhost:8000/api/listproducts', {headers: headers});

  }

  postProduct(p: Product){
    let headers =  new HttpHeaders();
    headers = headers.set('Authorization', localStorage.getItem('token'));
    return this.http.post('http://localhost:8000/api/addProduct', p ,{headers: headers});

  }
  removeProduct(id){
    let headers =  new HttpHeaders();
    headers = headers.set('Authorization', localStorage.getItem('token'));
    return this.http.delete('http://localhost:8000/api/deleteProduct/' + id,{headers: headers});

  }

  updateProduct(id, p){
    let headers =  new HttpHeaders();
    headers = headers.set('Authorization', localStorage.getItem('token'));
    return this.http.put('http://localhost:8000/api/updateProduct/' + id , p,{headers: headers});

  }






}
