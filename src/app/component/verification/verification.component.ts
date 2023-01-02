import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { NgOtpInputConfig } from 'ng-otp-input';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { OtpVerificationService } from 'src/app/services/otp-verification.service';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.css']
})
export class VerificationComponent implements OnInit{
  email: string = '';
  otp: string = '';

  config: NgOtpInputConfig = {
    allowNumbersOnly: true,
    length: 6,
    isPasswordInput: false,
    disableAutoFocus: false,
    placeholder: '',
  };

  userEmailId : string = '';
constructor(
  private router: Router,
  private otpVerificationService: OtpVerificationService,
  private toaster: ToastrService,
  private route: ActivatedRoute,
  private authService : AuthService
){}
  ngOnInit() {
    this.authService.userEmailId.subscribe(response => {
this.email = response; 
    })
   
  
  }
  onOtpChange(otp: string) {
    this.otp = otp;
  }

  //otp-verification service call
submit(){
  if(this.otp.length == 6){
    this.otpVerificationService.verifyOtp(this.email,this.otp).subscribe({
      next: (response: any)=>{
      
          this.router.navigateByUrl('/login');
          this.toaster.success(response.message, 'Verified');
      },
      error: (err) => {
        console.log('[Verify - ERR]', err);
        this.toaster.error('Something went Wrong', 'Verify');
      },
    });
  }
}


}
