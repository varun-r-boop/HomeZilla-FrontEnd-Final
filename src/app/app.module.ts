import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
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
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import { SearchComponent } from './component/search/search.component';
import { HomeComponent } from './component/home/home.component';
import { CommonNavComponent } from './component/common-nav/common-nav.component';
import { SearchPageComponent } from './component/search-page/search-page.component';
import { ViewDetailComponent } from './component/view-detail/view-detail.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchService } from './services/search.service';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    VerificationComponent,
    ForgotPasswordComponent,
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
    NgOtpInputModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [ AuthService,
  OtpVerificationService,
  SearchService,
  { provide: ToastrService, useValue: ToastrService },
  NgOtpInputConfig],
  bootstrap: [AppComponent]
})
export class AppModule { }
