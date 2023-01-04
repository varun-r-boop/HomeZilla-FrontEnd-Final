import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './component/register/register.component';
import { LoginComponent } from './component/login/login.component';
import { ReactiveFormsModule , FormsModule} from '@angular/forms';
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
import { ToastrService } from 'ngx-toastr';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import { CredentialsInterceptor } from './helper/interceptor/credentials.interceptor';
import { StorageService } from './services/storage.service';
import { JwtInterceptor } from './helper/interceptor/jwt.interceptor';
import { NgOtpInputComponent } from 'ng-otp-input';
import { CurrentOrdersComponent } from './component/dashboard/current-orders/current-orders.component';
import { OrderDetailsService } from './services/order-details.service';
import { PastOrdersComponent } from './component/dashboard/past-orders/past-orders.component';
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
    CurrentOrdersComponent,
    PastOrdersComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    //DropdownModule,
    HttpClientModule,
    NgOtpInputModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA],
  providers: [ AuthService,
  OtpVerificationService,
  StorageService,
  OrderDetailsService,
  { provide: ToastrService, useValue: ToastrService },
  { provide: HTTP_INTERCEPTORS, useClass: CredentialsInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  NgOtpInputConfig],
  bootstrap: [AppComponent]
})
export class AppModule { }

