import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './component/register/register.component';
import { LoginComponent } from './component/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VerificationComponent } from './component/verification/verification.component';
import { NgOtpInputConfig, NgOtpInputModule } from  'ng-otp-input';
import { AuthService } from './services/auth.service';
import { HttpClientModule , HTTP_INTERCEPTORS} from '@angular/common/http';
import { DashboardComponent } from './component/dashboard/dashboard.component';
//import {DropdownModule} from 'primeng/dropdown';
//import { NgToastModule} from 'ng-angular-popup';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HomeComponent } from './home/home.component';
import { OtpVerificationService } from './services/otp-verification.service';
import {ToastrService}from'ngx-toastr';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import { CommonModule } from '@angular/common';
import { NgToastModule } from 'ng-angular-popup';
import { VerifyComponent } from './verify/verify.component';
import { CurrentOrderComponent } from './component/current-order/current-order.component';
import { PastOrderComponent } from './component/past-order/past-order.component';
import { CCurrentOrderComponent } from './component/c-current-order/c-current-order.component';


//import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import { CredentialsInterceptor } from './helper/interceptor/credentials.interceptor';
import { StorageService } from './services/storage.service';
import { JwtInterceptor } from './helper/interceptor/jwt.interceptor';
import { NgOtpInputComponent } from 'ng-otp-input';
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
    VerifyComponent,
    CurrentOrderComponent,
    PastOrderComponent,
    CCurrentOrderComponent
     ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    //DropdownModule,
   // NgToastModule,
    HttpClientModule,
    CommonModule,
    
    ToastrService,
    NgOtpInputModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA],
  providers: [ AuthService,
  OtpVerificationService,
  StorageService,
  { provide: ToastrService, useValue: ToastrService },
  { provide: HTTP_INTERCEPTORS, useClass: CredentialsInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  NgOtpInputConfig],
  bootstrap: [AppComponent]
})
export class AppModule { }

