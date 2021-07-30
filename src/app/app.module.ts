import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {
  MatCardModule,
  MatTabsModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatCheckboxModule,
  MatIconModule,
  MatToolbarModule,
} from '@angular/material';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatExpansionModule} from '@angular/material/expansion';
import { AppRoutingModule,routingComponents  } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterUserComponent } from './register-user/register-user.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { DonatePetComponent } from './donate-pet/donate-pet.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PetManagementComponent } from './pet-management/pet-management.component';
import {MessagerieComponent} from './messagerie/messagerie.component';
import { CreateProductComponent } from './create-product/create-product.component';
//import { UpdateProductComponent } from './update-product/update-product.component';
import { MyCartComponent } from './my-cart/my-cart.component';
import { SuccessPaymentComponent } from './success-payment/success-payment.component';
import { UpdatePComponent } from './update-p/update-p.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    RegisterUserComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    DonatePetComponent,
    AboutComponent,
    NotFoundComponent,
    PetManagementComponent,
    MessagerieComponent,
    CreateProductComponent,
   // UpdateProductComponent,
    MyCartComponent,
    SuccessPaymentComponent,
    UpdatePComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    BrowserAnimationsModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    MatCardModule,
    MatTabsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatToolbarModule,
    MatExpansionModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

