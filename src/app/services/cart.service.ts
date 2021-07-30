import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Product} from '../models/product';
import {CartItem} from '../models/cartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }
  private _getHeaders(): HttpHeaders {
    let header = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return header;
  }


  addToCart(p){
    let headers =  new HttpHeaders();
    headers = headers.set('Authorization', localStorage.getItem('token'));
    return this.http.post('http://localhost:8000/api/panier/add', p,{headers: headers});
  }

  getPanier(){
    let headers =  new HttpHeaders();
    headers = headers.set('Authorization', localStorage.getItem('token'));
    return this.http.get<CartItem[]>('http://localhost:8000/api/panier',{headers: headers});

  }
 removePanier(){
  let headers =  new HttpHeaders();
  headers = headers.set('Authorization', localStorage.getItem('token'));
   return this.http.delete('http://localhost:8000/api/panier/remove',{headers: headers});
 }
 
 pay(amount){
  

  let headers =  new HttpHeaders();
  headers = headers.set('Authorization', localStorage.getItem('token'));

  return this.http.get('http://localhost:8000/api/doPayment/' + amount ,{headers: headers});

 }
}
