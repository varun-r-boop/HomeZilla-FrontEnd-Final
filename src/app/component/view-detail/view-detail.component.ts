import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ProviderData } from 'src/app/models/provider-data';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-view-detail',
  templateUrl: './view-detail.component.html',
  styleUrls: ['./view-detail.component.css']
})
export class ViewDetailComponent implements OnInit {

  date?: Date;
  time = {
    hour: 0,
    minute: 0
  };

  providerData: ProviderData = new ProviderData();
  constructor(
    public activeModal: NgbActiveModal, private searchService : SearchService
  ) { }

  ngOnInit() {
    this.searchService.providerData.subscribe(res => {
      this.providerData = res;
      console.log("okkkk");
    })
  }

  book()
  {
    
  }
}
