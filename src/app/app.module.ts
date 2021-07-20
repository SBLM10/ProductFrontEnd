import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatTableModule} from '@angular/material/table';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { MyCartComponent } from './my-cart/my-cart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import { UpdateProductComponent } from './update-product/update-product.component';
import { SuccessPaymentComponent } from './success-payment/success-payment.component';



@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    MyCartComponent,
    UpdateProductComponent,
    SuccessPaymentComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatTabsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
