import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-update-p',
  templateUrl: './update-p.component.html',
  styleUrls: ['./update-p.component.css']
})
export class UpdatePComponent implements OnInit {
  alert:boolean = false;
  product: Product;
  productToUpdate: {id: number, title: string, price: number, image: string}
  


  constructor(private route: ActivatedRoute, private productService: ProductService) { }
  

  ngOnInit(): void {
   console.log(this.route.snapshot);
   this.productToUpdate = {
   id: Number(this.route.snapshot.params['id']),
   title: this.route.snapshot.params['title'],
   price: Number(this.route.snapshot.params['price']),
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
