import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './component/register/register.component';
import { LoginComponent } from './component/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { VerificationComponent } from './component/verification/verification.component';
import { NgOtpInputModule } from  'ng-otp-input';
import { AuthService } from './services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { OtpVerificationService } from './services/otp-verification.service';
import { ToastrService } from 'ngx-toastr';
import { NgOtpInputConfig } from 'ng-otp-input';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    VerificationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgOtpInputModule,
    HttpClientModule
    
  ],
  providers: [ AuthService,
  OtpVerificationService,
  { provide: ToastrService, useValue: ToastrService },
  NgOtpInputConfig],
  bootstrap: [AppComponent]
})
export class AppModule { }
