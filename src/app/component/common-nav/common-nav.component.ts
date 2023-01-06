import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-common-nav',
  templateUrl: './common-nav.component.html',
  styleUrls: ['./common-nav.component.css']
})
export class CommonNavComponent implements OnInit {
  constructor(
    private storageService: StorageService, 
    private authService: AuthService
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
    
  }
}
