import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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
    private router: Router
    ) {}
  ngOnInit(): void {
    this.forgotPasswordForm = this.fb.group({
      email: ['', Validators.required],
    })
  }

  forgotPassword( ){
    this.auth.forgotPassword(this.email);
    this.email = '';
  }
 
}