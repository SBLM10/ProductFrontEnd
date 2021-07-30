import { Component, OnInit } from '@angular/core';
import {ProductService} from '../services/product.service';
import {Product} from '../models/product';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  alert: boolean = false;
  product: Product;
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.product = new  Product();
  }
  save(){
    this.productService.postProduct(this.product).subscribe(
      (data) => {

        this.alert = true ;
        this.ngOnInit();

      }

   
    );

  
  }
  closeAlert(){
    this.alert = false 
  }


}
