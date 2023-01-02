import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './component/register/register.component';
import { LoginComponent } from './component/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { VerificationComponent } from './component/verification/verification.component';
import { NgOtpInputConfig, NgOtpInputModule } from  'ng-otp-input';
import { AuthService } from './services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './component/dashboard/dashboard.component';
//import {DropdownModule} from 'primeng/dropdown';
import { NgToastModule} from 'ng-angular-popup';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HomeComponent } from './home/home.component';

import { OtpVerificationService } from './services/otp-verification.service';
import { NgToastService } from 'ng-angular-popup';
//import { NgOtpInputModule} from 'ng-opt-input';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
//import { VerificationComponent } from './component/verification/verification.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ForgotPasswordComponent,
    DashboardComponent,
    HeaderComponent,
    SidenavComponent,
    HomeComponent,
    VerificationComponent,
    ForgotPasswordComponent,
    NgOtpInputModule,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    //DropdownModule,
    NgToastModule,
    HttpClientModule
  ],
  providers: [ AuthService,
  OtpVerificationService,
  { provide: NgToastService, useValue: NgToastService },
  NgOtpInputConfig],
  bootstrap: [AppComponent]
})
export class AppModule { }
