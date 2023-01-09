import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrentOrdersComponent } from './component/dashboard/current-orders/current-orders.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { VerificationComponent } from './component/verification/verification.component';
//import { AuthGuard } from './helper/gaurd/auth.guard';
import { PastOrdersComponent } from './component/dashboard/past-orders/past-orders.component';

//import { forgotPassword } from './component/forgot-password/forgot-password.component';
import { HomeComponent } from './component/home/home.component';
import { SearchPageComponent } from './component/search-page/search-page.component';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './component/reset-password/reset-password.component';
import { ProviderDashboardComponent } from './component/provider-dashboard/provider-dashboard.component';
import { ProviderCurrentOrdersComponent } from './component/provider-dashboard/provider-current-orders/provider-current-orders.component';
import { ProviderPastOrdersComponent } from './component/provider-dashboard/provider-past-orders/provider-past-orders.component';


const routes: Routes = [
  {path: 'register', component:RegisterComponent},
  {path: 'login', component:LoginComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'verification',component:VerificationComponent},
  {path: 'current-order',component:CurrentOrdersComponent},
  {path: 'verification',component:VerificationComponent},
  {path: 'past-order', component:PastOrdersComponent},
  {path: 'dashboard', component:DashboardComponent},
  {path: 'home',component:HomeComponent},
  {path: 'search', component:SearchPageComponent},
  {path: '', component:HomeComponent},
  {path: 'forgotPassword', component:ForgotPasswordComponent},
  {path: 'resetPassword', component: ResetPasswordComponent}
  {path: 'providers', component:ProviderDashboardComponent},
  {path: 'verification',component:VerificationComponent},
  {path: 'current-order',component:CurrentOrdersComponent},
  {path: 'forgotPassword', component:ForgotPasswordComponent},
  {path: 'past-order', component:PastOrdersComponent},
  {path: 'home',component:HomeComponent},
  {path: 'search', component:SearchPageComponent},
  {path: 'p-current-order',component:ProviderCurrentOrdersComponent},
  {path: 'p-past-order',component:ProviderPastOrdersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
