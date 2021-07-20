import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../model/product';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import { Title } from '@angular/platform-browser';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  alert:boolean = false;
  product: Product;
  productToUpdate: {id: number, title: string, price: string, image: string}
  


  constructor(private route: ActivatedRoute, private productService: ProductService) { }
  

  ngOnInit(): void {
   console.log(this.route.snapshot);
   this.productToUpdate = {
   id:  this.route.snapshot.params['id'],
   title: this.route.snapshot.params['title'],
   price:  this.route.snapshot.params['price'],
   image: this.route.snapshot.params['image'] ,
   };

   this.product = new  Product();

  }

  update(id, p){
    this.productService.updateProduct(id, p).subscribe();
    this.alert = true ;
  }


  closeAlert(){
    this.alert = false 
  }


}
