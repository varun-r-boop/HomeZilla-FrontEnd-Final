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
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HomeComponent } from './component/home/home.component';
import { OtpVerificationService } from './services/otp-verification.service';
import { CommonModule } from '@angular/common';
import { CredentialsInterceptor } from './helper/interceptor/credentials.interceptor';
import { StorageService } from './services/storage.service';
import { JwtInterceptor } from './helper/interceptor/jwt.interceptor';
import { NgOtpInputComponent } from 'ng-otp-input';
import { CurrentOrdersComponent } from './component/dashboard/current-orders/current-orders.component';
import { OrderDetailsService } from './services/order-details.service';
import { PastOrdersComponent } from './component/dashboard/past-orders/past-orders.component';
import { SearchComponent } from './component/search/search.component';
import { SearchPageComponent } from './component/search-page/search-page.component';
import { ViewDetailComponent } from './component/view-detail/view-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchService } from './services/search.service';
import { NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { MessageService } from 'primeng/api';
import { ToastsContainer } from './component/shared/toasts-container.components';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './component/reset-password/reset-password.component';

import { ProviderDashboardComponent } from './component/provider-dashboard/provider-dashboard.component';
import { AnalyticsComponent } from './component/provider-dashboard/analytics/analytics.component';
import { ProviderCurrentOrdersComponent } from './component/provider-dashboard/provider-current-orders/provider-current-orders.component';
import { ProviderPastOrdersComponent } from './component/provider-dashboard/provider-past-orders/provider-past-orders.component';
import { NgToggleModule } from 'ng-toggle-button';
import { CommonNavComponent } from './component/common-nav/common-nav.component';
import { ToastService } from './services/toast.service';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    DashboardComponent,
    HeaderComponent,
    SidenavComponent,
    VerificationComponent,
    CurrentOrdersComponent,
    PastOrdersComponent,
    SearchComponent,
    HomeComponent,
    SearchPageComponent,
    ViewDetailComponent,
    ToastsContainer,
    ResetPasswordComponent,
    ForgotPasswordComponent,
    ProviderDashboardComponent,
    AnalyticsComponent,
    ProviderCurrentOrdersComponent,
    ProviderPastOrdersComponent,
    CommonNavComponent
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
    NgbPaginationModule,
    NgToggleModule.forRoot()
    
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA],
  providers: [ AuthService,
  OtpVerificationService,
  StorageService,
  OrderDetailsService,
  SearchService,
  {provide: MessageService, useValue: MessageService},
  { provide: HTTP_INTERCEPTORS, useClass: CredentialsInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  NgOtpInputConfig,
  ToastService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

