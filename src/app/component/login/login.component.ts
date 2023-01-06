import { Component, Injectable, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { StorageService } from 'src/app/services/storage.service';
import {MessageService} from 'primeng/api';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastService } from 'src/app/services/toast-service';

// import { ToastService } from './toast-service';
// import { ToastsContainer } from './toasts-container.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
@Injectable({
  providedIn: "root",
  useClass: LoginComponent,
})
export class LoginComponent implements OnInit{
  [x: string]: any;

  type:string = "password";
  isText:boolean = false;
  eyeIcon: string = "fa-eye-slash"
  loginForm!: FormGroup;
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  constructor (
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private toast: ToastrService,
    private storageService: StorageService,
    private messageService: MessageService,
    public toastService: ToastService, 
  
  ) {}


 
  ngOnInit() {
    if(this.storageService.isLoggedIn()){
      this.isLoggedIn = true;
      this.roles = this.storageService.getUser().roles;
    }
    this.loginForm = this.fb.group({    //grouping the form
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  hideShowPass(){
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash";
    this.isText ? this.type = "text" : this.type = "password";
  }
  onLogin(){
    if(this.loginForm.valid){
      console.log("okkk");
      console.log(this.loginForm.value)
      //send obj to db
      this.auth.login(this.loginForm.value)
      .subscribe({
        next:(res)=>{
          console.log(res['headers'].get('authorization'));
          this.storageService.saveUser(res['headers'].get('authorization'));
          
          this.isLoginFailed = false;
          this.isLoggedIn = true;
          this.roles = this.storageService.getUser().roles;
        //  this.reloadPage();
         
         this.router.navigate(['/dashboard']);
         this.toastService.show('Login Successful', { classname: 'bg-success text-light', delay: 3000 });
        },
        error: (err)=>{
          this.toastService.show(err?.error.message, { classname: 'bg-danger text-light', delay: 3000 });
          this.isLoginFailed = true;
        }
      })

    }else {
      this.toastService.show('PLease Enter Correct Details', { classname: 'bg-danger text-light', delay: 3000 });
    }
  }

  private validateAllFormFileds(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if(control instanceof FormControl){
        control?.markAsDirty({onlySelf:true});
      } else if (control instanceof FormGroup){
        this.validateAllFormFileds(control)
      }
    })
  }
  reloadPage(): void {
    window.location.reload();
  }
}
