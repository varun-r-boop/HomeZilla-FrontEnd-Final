import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { BookOrder } from 'src/app/models/book-order';
import { ProviderData } from 'src/app/models/provider-data';
import { OrderDetailsService } from 'src/app/services/order-details.service';
import { SearchService } from 'src/app/services/search.service';
import { StorageService } from 'src/app/services/storage.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-view-detail',
  templateUrl: './view-detail.component.html',
  styleUrls: ['./view-detail.component.css']
})
export class ViewDetailComponent implements OnInit {

  date?: Date;
  providerId?: string;

  public userForm!:FormGroup;
  data: any;
  providerData: ProviderData = new ProviderData();
  constructor(
    public activeModal: NgbActiveModal, 
    private searchService : SearchService, 
    private storageService: StorageService, 
    private toastService: ToastService, 
    public orderService: OrderDetailsService,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) { 
    this.userForm = this.fb.group({
      appointmentFrom: new Date().toISOString().substring(0, 16),
      appointmentTo: new Date().toISOString().substring(0, 16),
      serviceName: ''
    })
  }

  
  ngOnInit() {
    this.searchService.providerData.subscribe(res => {
      this.providerData = res;
    })
  }

  book(id?: string)
  {
    this.route.queryParams.subscribe(params => {
      this.providerId= params['id'];
    });
    this.data = this.userForm.value;
    this.data.providerId = this.providerId;
    if(this.storageService.isLoggedIn())
    {
      this.orderService.bookOrder(this.data).subscribe({
        next: (res)=> {
          console.log(res);
          if(res === "Placed the Order Successfully")
          {
            this.toastService.show('Placed the Order', { classname: 'bg-success text-light', delay: 3000 });
          }
          else{
            this.toastService.show('Provider Not Available', { classname: 'bg-danger text-light', delay: 3000 });
          }
        },
        error:(err => {
          console.log(err);
        })
      })
    }
    else
    {
      this.toastService.show('Login Required', { classname: 'bg-danger text-light', delay: 3000 });
    }
  }
}
