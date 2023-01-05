import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user';
import { ProfileService } from 'src/app/services/profile.service';
import { DialogService } from 'primeng/dynamicdialog';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [DialogService]
})
export class DashboardComponent implements OnInit{
  user: User;
  profilePicture!: File;
  display: boolean = false;
  dashboardform! : FormGroup;
  constructor(
    //private api: ApiService
    private profileService : ProfileService,
    private dialogService: DialogService
  ){
    this.user = new User();
  }

  ngOnInit () {
    this.profileService.getProfileDetails().subscribe(user => {
      this.user = user;
    });
      
  }

  updateProfilePicture() {
    
    this.profileService.updateProfilePicture(this.profilePicture).subscribe(
      (response) => console.log('Success!', response),
        (error) => console.error('Error!', error)
    );
  }
  onSubmit(){
  this.profileService.updateProfile(this.user).subscribe(
        (response) => console.log('Success!', response),

        (error) => alert(error.error.message)
      );
    
  }
  onChange(event)
  {
    this.profilePicture = event.target.files[0];
  }
    

  }

  


