import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrentOrdersComponent } from './component/dashboard/current-orders/current-orders.component';
import { CCurrentOrderComponent } from './component/c-current-order/c-current-order.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { VerificationComponent } from './component/verification/verification.component';
import { CurrentOrderComponent } from './component/current-order/current-order.component';
//import { AuthGuard } from './helper/gaurd/auth.guard';
import { PastOrderComponent } from './component/past-order/past-order.component';
import { VerifyComponent } from './verify/verify.component';
import { ChangePasswordComponent } from './component/change-password/change-password.component';

//import { forgotPassword } from './component/forgot-password/forgot-password.component';
import { HomeComponent } from './component/home/home.component';
import { SearchPageComponent } from './component/search-page/search-page.component';


const routes: Routes = [
  {path: 'register', component:RegisterComponent},
  {path: 'login', component:LoginComponent},
  {path: 'dashboard', component: DashboardComponent},
  
  //{path: 'forgotPassword', component: ForgotPasswordComponent},
  {path: 'verification',component:VerificationComponent},
  {path: 'current-orders',component:CurrentOrdersComponent},
  {path: 'forgotPassword', component:ForgotPasswordComponent},
  {path: 'verification',component:VerificationComponent},
  {path: 'verify', component: VerifyComponent},
  {path: 'current-order',component:CurrentOrderComponent} ,
  {path: 'past-order', component:PastOrderComponent},
  {path: 'c-current-order', component: CCurrentOrderComponent},
  {path: 'dashboard', component:DashboardComponent},
  {path: 'changePassword', component: ChangePasswordComponent}
  ,
  {path: 'home',component:HomeComponent},
  {path: 'search', component:SearchPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
