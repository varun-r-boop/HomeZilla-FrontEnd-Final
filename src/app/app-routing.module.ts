import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { VerificationComponent } from './component/verification/verification.component';
import { HomeComponent } from './component/home/home.component';
import { SearchPageComponent } from './component/search-page/search-page.component';


const routes: Routes = [
  {path: '', component:LoginComponent},
  {path: 'register', component:RegisterComponent},
  {path: 'login', component:LoginComponent},
  {path: 'verification',component:VerificationComponent},
  {path: 'home',component:HomeComponent},
  {path: 'search', component:SearchPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
