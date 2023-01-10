import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { ToastService } from 'src/app/services/toast.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})


export  class RegisterComponent implements OnInit{


  email?: string ='';
  type:string = "password";
  isText:boolean = false;
  eyeIcon: string = "fa-eye-slash";

  signUpForm!  : FormGroup;
  isSubmitted: boolean = false;

 
  constructor (
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
    public toastService: ToastService 
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
    });
   
    
  }

  hideShowPass(){
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash";
    this.isText ? this.type = "text" : this.type = "password";
  }

  onSignup(){
   
    if(this.signUpForm.valid){
      //send obj to db
      this.auth.signUp(this.signUpForm.value)
      .subscribe({
        next:(res)=> {
          this.router.navigate(['/verification']).then(() => {
            this.toastService.show(res['message'], { classname: 'bg-success text-light', delay: 3000 });
          });
        },
        error: (err=> {
          console.log("signed err");
          this.toastService.show(err?.error.message, { classname: 'bg-danger text-light', delay: 3000 });
        })
      })
    }else {
      this.toastService.show('Enter All the required Fields', { classname: 'bg-danger text-light', delay: 3000 });
    }
  };
  
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

