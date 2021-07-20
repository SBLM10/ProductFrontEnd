import { Component, Input, OnInit } from '@angular/core';
import {ProductService} from '../service/product.service';
import {CartService} from '../service/cart.service';
import {Product} from '../model/product';
import {CartItem} from '../model/cartItem';


@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
 // @Input('quantity') qty : number;
alert: boolean = false ;
 qty: number;
  
   getVal(item){
  
    console.warn(item);
    this.qty = item;
   
   
 };

   
  cart: CartItem;
  listProduct: Product[];
  product: Product;
  constructor(private productService: ProductService, private cartService: CartService) { }

  ngOnInit(): void {
    this.product = new  Product();
    this.productService.getProduct().subscribe(
      (data: Product[]) => this.listProduct = data);


  }
  addToCart(p){
    this.cart = new  CartItem();
    this.cart.id = p.id;
    this.cart.prix = p.price;
    this.cart.productName = p.title;
    this.cart.quantity = this.qty;
    this.cart.total = this.qty* p.price;

    this.cartService.addToCart(this.cart).subscribe(
       (data) => {console.log(data)
        this.alert = true ;
      //  this.ngOnInit();
       }
        
     );
    
        

  }

  delete(id){
    this.productService.removeProduct(id).subscribe(
       (data) => {console.log(data)
        this.ngOnInit();
       }

       
     );

  }

  //update(id, p){
   // this.productService.updateProduct(id, p).subscribe(
  //     (data) => {console.log(data)
  //     }
   //  );

 // }
  closeAlert(){
    this.alert = false 
  }



}
