import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TokenPayLoad } from '../models/Token';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {
  constructor( private storageService: StorageService,

   

    private router: Router,

    ){}



  isLoggedIn = false;

  isLoginFailed = false;

  errorMessage = '';

  roles: string[] = [];

  Token: TokenPayLoad = new TokenPayLoad();

  dashboard(){



    this.Token = this.storageService.getDecodedAccessToken();

    if(this.Token.role=="Customer"){

      this.router.navigate(['/dashboard']);

   }

   else if(this.Token.role=="Provider"){

     this.router.navigate(['/providers']);

   }

  }

  currentOrders(){



    this.Token = this.storageService.getDecodedAccessToken();

    if(this.Token.role=="Customer"){

      this.router.navigate(['/current-order']);

   }

   else if(this.Token.role=="Provider"){

     this.router.navigate(['/p-current-order']);

   }

  }

  pastOrders(){



    this.Token = this.storageService.getDecodedAccessToken();

    if(this.Token.role=="Customer"){

      this.router.navigate(['/past-order']);

   }

   else if(this.Token.role=="Provider"){

     this.router.navigate(['/p-past-order']);

   }

  }

  constructor( private storageService: StorageService,
    
    private router: Router,
    ){}

  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  Token: TokenPayLoad = new TokenPayLoad();
  dashboard(){

    this.Token = this.storageService.getDecodedAccessToken();
    if(this.Token.role=="Customer"){
      this.router.navigate(['/dashboard']);
   }
   else if(this.Token.role=="Provider"){
     this.router.navigate(['/providers']);
   }
  }
  currentOrders(){

    this.Token = this.storageService.getDecodedAccessToken();
    if(this.Token.role=="Customer"){
      this.router.navigate(['/current-order']);
   }
   else if(this.Token.role=="Provider"){
     this.router.navigate(['/p-current-order']);
   }
  }
  pastOrders(){

    this.Token = this.storageService.getDecodedAccessToken();
    if(this.Token.role=="Customer"){
      this.router.navigate(['/past-order']);
   }
   else if(this.Token.role=="Provider"){
     this.router.navigate(['/p-past-order']);
   }
  }

}
