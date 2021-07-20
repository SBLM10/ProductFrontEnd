import { Component, OnInit } from '@angular/core';
import {CartItem} from '../model/cartItem';
import {CartService} from '../service/cart.service';
import {MatTableDataSource} from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { ArrayDataSource } from '@angular/cdk/collections';

@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.css']
})
export class MyCartComponent implements OnInit {
  items = [] ;
  json;
  n: number;
  url: string; 
  amount = 0;
  listCart: CartItem[];
  cartitem: CartItem;


  constructor(private cartService: CartService, private route: ActivatedRoute) {
  }
  columns = ['id', 'Product Name', 'prix', 'quantity', 'total (DT)']
  index = ['id', 'ProductName', 'prix', 'quantity', 'total']
  ngOnInit(): void {
   
    this.cartService.getPanier().subscribe(
      (response)=>
      {
        this.listCart = response;
        this.listCart.forEach(element => {
          this.amount = this.amount+element.total
          
        });
       
      },

      (error)=>
      {
        console.log("Error Occured : " + error);
      }
     
      
    )
    

  } 
  
  
  remove(){
    this.cartService.removePanier().subscribe( (data) =>{
      console.log(data);

      this.ngOnInit();
      
      this.amount = 0;

    });
  }

  pay(amount){
    this.cartService.pay(this.amount).toPromise().then( (data) =>{
      console.log(data);
      this.json = JSON.stringify(data)
      this.n = this.json.length - 3
      this.url = this.json.substring(8, this.n);
      window.open(this.url)
      

          
    })

  }
  

}
