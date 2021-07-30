import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,  Validators } from '@angular/forms';
import { ImageService } from '../imageservices/image.service';
import { PetModel } from '../models/pet';
import { ApiService } from '../shared/api.service';


@Component({
  selector: 'app-donate-pet',
  templateUrl: './donate-pet.component.html',
  styleUrls: ['./donate-pet.component.css']
})
export class DonatePetComponent implements OnInit {
petForm : FormGroup;
pet : PetModel = new PetModel(1,'',0,'','') ;

  private p:any; 


  constructor(
    private formBuilder : FormBuilder,private imagesService:ImageService,
    private api : ApiService
  ) {}

  ngOnInit() {
    this.petForm = this.formBuilder.group({
      genderPet:['',Validators.required],
      age:['0'],
      description:[''],
      imagePet:['',Validators.required]
    })
  }
  postPet() {
    this.imagesService.getAllImages().subscribe(data => {
      this.p =data;
    },err => {
      console.log("EROOOOOOOOOOOOOOOOOOOR" + err);
    }) 
  }

}
