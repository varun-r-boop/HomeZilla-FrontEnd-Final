import { AfterContentInit, Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SearchResponse } from 'src/app/models/search-response';
import { SearchService } from 'src/app/services/search.service';
import { ViewDetailComponent } from '../view-detail/view-detail.component';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements AfterContentInit{
  post!: SearchResponse[]
  public user = {
    name: 'Izzat Nadiri',
    age: 26
  }
  

  constructor (public modalService: NgbModal,private searchService : SearchService)
  {
  }
  ngAfterContentInit() {
   
  }
  

  openModal()
  {
    const modalRef = this.modalService.open( ViewDetailComponent);
    modalRef.componentInstance.user = this.user;
    modalRef.result.then((result) => {
      if (result) {
        console.log(result);
      }
    });
  }
}
