import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrentOrdersComponent } from './component/dashboard/current-orders/current-orders.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { VerificationComponent } from './component/verification/verification.component';
import { AuthGuard } from './helper/gaurd/auth.guard';
//import { ForgotPasswordComponent } from './models/forgot-password';

const routes: Routes = [
  {path: 'register', component:RegisterComponent},
  {path: 'login', component:LoginComponent},
  {path: 'dashboard', component: DashboardComponent},
  
  //{path: 'forgotPassword', component: ForgotPasswordComponent},
  {path: 'verification',component:VerificationComponent},
  {path: 'current-orders',component:CurrentOrdersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
