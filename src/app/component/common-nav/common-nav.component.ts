import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenPayLoad } from 'src/app/models/Token';
import { AuthService } from 'src/app/services/auth.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-common-nav',
  templateUrl: './common-nav.component.html',
  styleUrls: ['./common-nav.component.css']
})
export class CommonNavComponent implements OnInit {
  Token: TokenPayLoad = new TokenPayLoad();
  constructor(
    private storageService: StorageService, 
    private authService: AuthService,
    private router: Router,
    )
  {

  }
  isLogged: boolean = false;
  ngOnInit(): void {
      if(this.storageService.isLoggedIn())
      {
        this.isLogged = true;
        var token = this.storageService.getUser();
      }
  }

  logOut()
  {
    this.authService.signOut();
    window.location.reload();
  }
  profile()
  {
    this.Token = this.storageService.getDecodedAccessToken();
    if(this.Token.role=="Customer"){
      this.router.navigate(['/dashboard']);
   }
   else if(this.Token.role=="Provider"){
     this.router.navigate(['/providers']);
   }
  }
}
