import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';
import { ListProductComponent } from './list-product/list-product.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { MyCartComponent } from './my-cart/my-cart.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { SuccessPaymentComponent } from './success-payment/success-payment.component';

const routes: Routes = [
  {path: 'products', component: ListProductComponent},
  {path: 'create-product', component: CreateProductComponent},
  {path: 'my-Cart', component: MyCartComponent},
  {path: 'products/:id/:title/:image/:price', component: UpdateProductComponent},
  {path: 'success', component: SuccessPaymentComponent},
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ListProductComponent, CreateProductComponent ]
