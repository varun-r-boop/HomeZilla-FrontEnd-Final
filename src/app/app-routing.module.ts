import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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

//import { forgotPassword } from './component/forgot-password/forgot-password.component';

const routes: Routes = [
  {path: 'register', component:RegisterComponent},
  {path: 'login', component:LoginComponent},
 // {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  {path: 'forgotPassword', component:ForgotPasswordComponent},
  {path: 'verification',component:VerificationComponent},
  {path: 'verify', component: VerifyComponent},
  {path: 'current-order',component:CurrentOrderComponent} ,
  {path: 'past-order', component:PastOrderComponent},
  {path: 'c-current-order', component: CCurrentOrderComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
