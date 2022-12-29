import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

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
    private fb: FormBuilder,
    private auth: AuthService
  ) {}


  ngOnInit(): void {
    this.signUpForm = this.fb.group({
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

  onSignup(){
    if(this.signUpForm.valid){

      console.log(this.signUpForm.value)
      //send obj to db
      this.auth.signUp(this.signUpForm.value)
      .subscribe({
        next:(res)=> {
          alert(res.message)
        },
        error: (err=> {
          alert(err?.error.message)
        })
      })
    }else {

      console.log("Form is not valid");
      //error using toaster
      this.validateAllFormFileds(this.signUpForm);
      alert("Your form is invalid")
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

