import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Route, Router } from '@angular/router';
import { NgOtpInputConfig } from 'ng-otp-input';
import { ToastService } from 'src/app/services/toast-service';
import { ResetPassword } from '../../models/resetPassword';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})


export class ResetPasswordComponent implements OnInit{
  resetPasswordForm!: FormGroup;
  newPassword!: string;
  confirmPassword!: string;
  otp!: string;
  resetPasswordInfo!: ResetPassword;
  email!: string;

  config: NgOtpInputConfig = {
    allowNumbersOnly: true,
    length: 6,
    isPasswordInput: false,
    disableAutoFocus: false,
    placeholder: '',
  };
  
  constructor (
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private toastService: ToastService
  ){}
  ngOnInit(): void {
    this.auth.userEmailId.subscribe((email)=>{
      this.email = email
    })
    console.log(this.email);
    this.resetPasswordForm = this.fb.group({
      newPassword: new FormControl(this['newPassword'], [Validators.required, Validators.minLength(8)]),
      confirmPassword: new FormControl(this['confirmPassword'], [Validators.required, Validators.minLength(8)]),
  }
  )
}

onOtpChange(otp: string) {
  this.otp = otp;
}

updatePassword(){
  this.resetPasswordInfo = {
    otp: this.otp,
    password: this.resetPasswordForm.value.newPassword,
    confirmPassword: this.resetPasswordForm.value.confirmPassword,
    email: this.email
  }
  this.auth.resetPassword(this.resetPasswordInfo).subscribe({
    next: (res) => {
      console.log(res);
      this.toastService.show('Reset password email sent successful', { classname: 'bg-success text-light', delay: 3000 });
      this.router.navigateByUrl('/dashboard');
    },
    error: (err) => {
      console.log(err);  
      this.toastService.show('Something went wrong', { classname: 'bg-success text-light', delay: 3000 });
    }
  })
}
}
