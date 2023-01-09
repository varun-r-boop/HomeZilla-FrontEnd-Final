import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { User } from 'src/app/models/user';
import { ProfileService } from 'src/app/services/profile.service';
import { ServiceData } from 'src/app/models/provider-services';
import { ProviderService } from 'src/app/services/provider-services.service';

@Component({
  selector: 'app-provider-dashboard',
  templateUrl: './provider-dashboard.component.html',
  styleUrls: ['./provider-dashboard.component.css']
})
export class ProviderDashboardComponent implements OnInit {
  user: User;
  services: ServiceData[] = [];
  profilePicture!: File;
  display: boolean = false;
  dashboardform! : FormGroup;
  checked: boolean = false;
  value?: boolean;
  constructor(
    //private api: ApiService
    private profileService : ProfileService,
    private providerService:ProviderService
  ){
    this.user = new User();
  }

  ngOnInit () {
    this.profileService.getProviderProfileDetails().subscribe(user => {
      this.user = user;
    });

      this.getServices();
  }

  updateProviderProfilePicture() {
    
    this.profileService.updateProviderProfilePicture(this.profilePicture).subscribe(
      {
        next: (response) => {
          (response) => console.log('Success!', response)
          this.reloadPage();
        },
        error: (error) => {
          console.log(error);
        },
      });
    
  }
  onSubmit(){
  this.profileService.updateProviderProfile(this.user).subscribe(
   
        (response) => console.log('Success!', response),

        (error) => alert(error.error.message)
      );
    
  }
  onChange(event)
  {
    this.profilePicture = event.target.files[0];
  }
    reloadPage(): void {
    window.location.reload();
  }
  getServices() {
    console.log("okkkload");
    this.providerService.getServiceData().subscribe(services => {
      this.services = services;
      console.log(services)
    });
  }

  addService(service: ServiceData) {
    this.providerService.addServiceData(service).subscribe(savedService => {
      this.services.push(savedService);
    });
  }

  updateService(service: ServiceData) {
    this.providerService.updateServiceData(service).subscribe(updatedService => {
      const index = this.services.findIndex(s => s.id === service.id);
      this.services[index] = updatedService;
    });
  }

  deleteService(ServiceId: any) {
    console.log(this.getServices);
    if(ServiceId){
    this.providerService.deleteServiceData(ServiceId).subscribe(() => {
      this.services = this.services;
    });
  }
  }
  onPlumber(event)
  {
    var data: ServiceData = new ServiceData;
    data.service = "Plumber";
    console.log(this.value);
    if(this.value == true)
    {
      this.addService(data);
      console.log("Added the service")
    }else{
      this.deleteService(data);
      console.log("Deleted the service successfully")
    }
    }

    onCarpenter(event)
    {
      var data: ServiceData = new ServiceData;
      data.service = "Plumber";
      console.log(this.value);
      if(this.value == true)
      {
        this.addService(data);
        console.log("Added the service")
      }else{
        this.deleteService(data);
        console.log("Deleted the service successfully")
      }
      }
      onHouseKeeper(event)
      {
        var data: ServiceData = new ServiceData;
        data.service = "Plumber";
        console.log(this.value);
        if(this.value == true)
        {
          this.addService(data);
          console.log("Added the service")
        }else{
          this.deleteService(data);
          console.log("Deleted the service successfully")
        }
        }
        onElectrician(event)
        {
          var data: ServiceData = new ServiceData;
          data.service = "Plumber";
          console.log(this.value);
          if(this.value == true)
          {
            this.addService(data);
            console.log("Added the service")
          }else{
            this.deleteService(data);
            console.log("Deleted the service successfully")
          }
          }
}
