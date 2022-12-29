import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  
  type:string = "password";
  isText:boolean = false;
  eyeIcon: string = "fa-eye-slash";

  signUpForm!  : FormGroup;

  constructor (
    private fB: FormBuilder
  ) {}


  ngOnInit(): void {
    this.signUpForm = this.fB.group({
      firstName: ['',Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      userRole: ['', Validators.required],
      mobileNumber: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  hideShowPass(){
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash";
    this.isText ? this.type = "text" : this.type = "password";
  }

  onSubmit(){
    if(this.signUpForm.valid){

      console.log(this.signUpForm.value)
      //send obj to db
    }else {

      console.log("Form is not valid");
      //error using toaster
      this.validateAllFormFileds(this.signUpForm);
      alert("Your form is invalid")
    }
  }

  onSignup(){
    if(this.signUpForm.valid){
      //perform logic for signup

      console.log(this.signUpForm.value)
    } else {
      //logic for throwing error
      console.log("form is not valid");
      this.validateAllFormFileds(this.signUpForm)
      alert("your form is invalid")
    }
  }
  
  private validateAllFormFileds(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if(control instanceof FormControl){
        control.markAsDirty({onlySelf:true});
      } else if (control instanceof FormGroup){
        this.validateAllFormFileds(control)
      }
    })
  }
}

