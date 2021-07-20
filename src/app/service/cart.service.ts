import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Product} from '../model/product';
import {CartItem} from '../model/cartItem';

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

    return this.http.post('http://localhost:8000/panier/add', p);
  }

  getPanier(){
    return this.http.get<CartItem[]>('http://localhost:8000/panier');

  }
 removePanier(){
   return this.http.delete('http://localhost:8000/panier/remove');
 }
 
 pay(amount){

  return this.http.delete('http://localhost:8000/doPayment/' + amount);

 }

}
