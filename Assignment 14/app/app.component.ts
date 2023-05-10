import { Component } from '@angular/core';

// import classes which are required for reactive forms
import {FormBuilder,FormGroup,Validators, FormControl} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent 
{
  // Inject FormBuilder service
  constructor(public fbobj : FormBuilder)
  {
  }

  MarvellousForm = this.fbobj.group(
    {
    
      fname :['', Validators.required ],
      lname : ['',Validators.required],
      email: ['',Validators.required],
      phone:['',Validators.required,Validators.minLength(10),Validators.max(10),Validators.requiredTrue],
      city:['',Validators.required,Validators.minLength(4)],
      state:['',Validators.required],
      zipcode:['',Validators.required,Validators.minLength(5)],
      comments:['',Validators.required,Validators.minLength(30)]
    

    }
  );
  
}
