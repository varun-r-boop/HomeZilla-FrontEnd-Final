import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

//import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit{
  [x: string]: any;

  email : string = ''

  forgotPasswordForm! : FormGroup;

  constructor (private auth: AuthService,
    private fb:  FormBuilder,
    private router: Router,
    private toast: ToastrService
    ) {}
  ngOnInit(): void {
    this.forgotPasswordForm = this.fb.group({
      email: new FormControl(this['email'], [Validators.required, Validators.email]), 
    })
  }

  sendOTP() {
    this.auth.userEmailId.next(this.forgotPasswordForm.value.email);
    this.auth.forgotPassword(this.forgotPasswordForm.value)
    .subscribe({

      next: (res)=> {
      this.toast.success("Reset password email sent successful");
      this.router.navigate(['/resetPassword']);
      
    } ,
    error: (err)=>{
          
      this.toast.error("something went wrong");
      
     }
    }
    )

  }

  get Email(): FormControl {
    return this.forgotPasswordForm.get('email') as FormControl;
  }
 
 
}