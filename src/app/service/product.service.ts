import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Product} from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {}




    getProduct(){
    return this.http.get<Product[]>('http://localhost:8000/listproducts');

    }

    postProduct(p: Product){
      return this.http.post('http://localhost:8000/api/addProduct', p);

    }
    removeProduct(id){
      return this.http.delete('http://localhost:8000/api/deleteProduct/' + id);
  
    }

    updateProduct(id, p){
      return this.http.put('http://localhost:8000/api/updateProduct/' + id , p);
  
    }






}
