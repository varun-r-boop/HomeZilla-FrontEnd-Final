import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
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
import { CredentialsInterceptor } from './helper/interceptor/credentials.interceptor';
import { StorageService } from './services/storage.service';
import { JwtInterceptor } from './helper/interceptor/jwt.interceptor';
import { NgOtpInputComponent } from 'ng-otp-input';
import { ChangePasswordComponent } from './component/change-password/change-password.component';


import { CurrentOrdersComponent } from './component/dashboard/current-orders/current-orders.component';
import { OrderDetailsService } from './services/order-details.service';
import { PastOrdersComponent } from './component/dashboard/past-orders/past-orders.component';
import { SearchComponent } from './component/search/search.component';
import { CommonNavComponent } from './component/common-nav/common-nav.component';
import { SearchPageComponent } from './component/search-page/search-page.component';
import { ViewDetailComponent } from './component/view-detail/view-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchService } from './services/search.service';


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
    PastOrdersComponent,
    VerifyComponent,
    CurrentOrderComponent,
    PastOrderComponent,
    CCurrentOrderComponent,
    ChangePasswordComponent,
    SearchComponent,
    HomeComponent,
    CommonNavComponent,
    SearchPageComponent,
    ViewDetailComponent
     ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule, 
    NgOtpInputModule,
    NgbModule,
    FormsModule,
    BrowserAnimationsModule,
    NgbPaginationModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA],
  providers: [ AuthService,
  OtpVerificationService,
  StorageService,
  OrderDetailsService,
  ToastrService,
  SearchService,
  { provide: ToastrService, useValue: ToastrService },
  { provide: HTTP_INTERCEPTORS, useClass: CredentialsInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  NgOtpInputConfig],
  bootstrap: [AppComponent]
})
export class AppModule { }

