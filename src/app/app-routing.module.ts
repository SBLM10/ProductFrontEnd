import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { DonatePetComponent } from './donate-pet/donate-pet.component';
import { HomeComponent } from './home/home.component';
import { UpdatePComponent } from './update-p/update-p.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PetManagementComponent } from './pet-management/pet-management.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { MessagerieComponent} from './messagerie/messagerie.component';
import { MyCartComponent } from './my-cart/my-cart.component';
import { SuccessPaymentComponent } from './success-payment/success-payment.component';



const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'create-product', component: CreateProductComponent},
  {path: 'success', component: SuccessPaymentComponent},
  {path: 'my-Cart', component: MyCartComponent},
  {path: 'login-signup', component: RegisterUserComponent},
  {path : 'home' , component: HomeComponent},
  {path: 'donatePet', component: DonatePetComponent},
  {path: 'about', component : AboutComponent},
  {path: 'management' , component: PetManagementComponent},
  {path: 'chat' , component: MessagerieComponent},
  //{path: '**' , component: NotFoundComponent},
  {path: 'management/:id/:title/:image/:price' , component: UpdatePComponent},
  //{path: 'management/:id/:title/:image/:price', component: UpdateProductComponent},

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [PetManagementComponent, CreateProductComponent ]
