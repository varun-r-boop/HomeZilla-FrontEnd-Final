import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from 'src/app/models/user';
import { ProfileService } from 'src/app/services/profile.service';
import { ServiceData } from 'src/app/models/provider-services';
import { ProviderService } from 'src/app/services/provider-services.service';
import { ServiceId } from 'src/app/models/service-op';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { ServiceList } from 'src/app/models/service-check';

@Component({
  selector: 'app-provider-dashboard',
  templateUrl: './provider-dashboard.component.html',
  styleUrls: ['./provider-dashboard.component.css']
})
export class ProviderDashboardComponent implements OnInit {
  user: User;
  services: ServiceData[];
  serviceList: ServiceList;
  profilePicture!: File;
  display: boolean = false;
  dashboardform! : FormGroup;
  checked: boolean = false;
  value?: boolean;
  valueC?: boolean;
  valueH?: boolean;
  valueE?: boolean;
  serviceNames?: string;
  newService: ServiceData ={};
  
  public userForm!:FormGroup;
  constructor(
    //private api: ApiService
    private profileService : ProfileService,
    private providerService:ProviderService,
    public fb: FormBuilder
  ){
    this.user = new User();
    this.services = new Array<ServiceData>();
    this.serviceList = new ServiceList();
    this.userForm = this.fb.group({
      service: '',
      price: Number
    })
  }

  ngOnInit () {
    this.profileService.getProviderProfileDetails().subscribe(user => {
      this.user = user;
    });
    
      this.providerService.getServiceData().subscribe(res => {
        this.services = res;
      });

      

      this.providerService.checkServiceData().subscribe(res => {
        this.serviceList = res;

      })
      
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
  addService() {
    this.newService = this.userForm.value;
    console.log(this.newService);
    this.providerService.addServiceData(this.newService).subscribe(savedService => {
      console.log(savedService);
    });
  }
 

  updateService(service: ServiceData) {
    this.providerService.updateServiceData(service).subscribe(updatedService => {
      const index = this.services.findIndex(s => s.id === service.id);
      this.services[index] = updatedService;
    });
  }

  deleteService(ServiceId: any) {
    console.log("okkk");
    this.providerService.deleteServiceData(ServiceId).subscribe(() => {
      this.services = this.services;
      console.log("okkk");
    });
  
  }
  // onPlumber(event)
  // {
  //   var data: ServiceData = new ServiceData;
  //   data.service = "Plumber";
  //   console.log(this.value);
  //   if(this.value == true)
  //   {
  //     this.addService();
  //     console.log("Added the service")
  //   }else{
  //     this.deleteService(data.id);
  //     console.log("Deleted the service successfully")
  //   }
  //   }

  //   onCarpenter(event)
  //   {
  //     var data: ServiceData = new ServiceData;
  //     data.service = "Carpenter";
  //     console.log(this.valueC);
  //     if(this.valueC == true)
  //     {
  //       this.addService();
  //       console.log("Added the service")
  //     }else{
  //       this.deleteService(data.id);
  //       console.log("Deleted the service successfully")
  //     }
  //     }
  //     onHouseKeeper(event)
  //     {
  //       var data: ServiceData = new ServiceData;
  //       data.service = "HouseKeeper";
  //       console.log(this.valueH);
  //       if(this.valueH == true)
  //       {
  //         this.addService();
  //         console.log("Added the service")
  //       }else{
  //         this.deleteService(data.id);
  //         console.log("Deleted the service successfully")
  //       }
  //       }
  //       onElectrician(event)
  //       {
  //         var data: ServiceData = new ServiceData;
  //         data.service = "Electrician";
  //         console.log(this.valueE);
  //         if(this.valueE == true)
  //         {
  //           this.addService();
  //           console.log("Added the service")
  //           this.getServices()
  //           var test: ServiceId = new ServiceId;
  //           console.log(data)
  //           test.id = data.id;
  //           console.log(test.id)

  //         }else{
  //         //  this.deleteService(test.id);
  //           console.log("Deleted the service successfully")
  //         }
  //         }

   
 
}

