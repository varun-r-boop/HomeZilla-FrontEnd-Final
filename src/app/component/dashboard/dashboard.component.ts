import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  user: User;
  profilePicture!: File;
  constructor(
    //private api: ApiService
    private profileService : ProfileService
  ){
    this.user = new User();
  }

  ngOnInit () {
    //.api.getUsers()
    //.subscribe((res: any)=>{
      //this.users = res;
      
  }

  // onFileChange(event:any) {
  //   this.selectedFile = event.target.files[0];
  // }

  updateProfilePicture() {
    this.profileService.updateProfilePicture(this.profilePicture).subscribe(
      (response) => console.log('Success!', response),
        (error) => console.error('Error!', error)
    );
  }
  onSubmit(){
  this.profileService.updateProfile(this.user).subscribe(
        (response) => console.log('Success!', response),
        (error) => console.error('Error!', error)
      );
    
  }
    

  }

  


