import { style } from '@angular/animations';
import { Target } from '@angular/compiler';
import { AfterContentInit, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject, Subscription, takeUntil } from 'rxjs';
import { SearchResponse } from 'src/app/models/search-response';
import { SearchService } from 'src/app/services/search.service';
import { ViewDetailComponent } from '../view-detail/view-detail.component';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements AfterContentInit, OnDestroy, OnInit{
  post : SearchResponse = new SearchResponse();
  page =  1;
  pageSize: number = 10;
  

  query: string= "";
  location:string= "";
  pageNumber: number=1;
  unSubscribe = new Subject<void>();

  constructor (public modalService: NgbModal,private searchService : SearchService, private route: ActivatedRoute, private router: Router)
  {
  }
  ngAfterContentInit() {
    this.searchService.searchData.subscribe(res => {
      this.post = res;
      this.page = this.post.currentPage;
      this.pageSize = this.post.totalPages * 10;
    })
  }
   ngOnInit(){
    this.route.queryParams.subscribe(params => {
      this.location = params['Location'];
      this.query = params['Service'];
      this.pageNumber = params['PageNumber']
  });
    this.searchService.getSearchResults(this.query,this.location,this.pageNumber).subscribe(posts =>{
      this.searchService.searchData.next(posts);
    });
    this.router.navigate([],{queryParams: {Service: this.query,Location: this.location, PageNumber: this.pageNumber}})
    
   }

  renderPage(event: number) {
    this.pageNumber = event;
    this.route.queryParams.subscribe(params => {
      this.location = params['Location'];
      this.query = params['Service'];
  });
    this.searchService.getSearchResults(this.query,this.location,this.pageNumber).subscribe(posts =>{
      this.searchService.searchData.next(posts);
    });
    this.router.navigate([],{queryParams: {Service: this.query,Location: this.location, PageNumber: this.pageNumber}})
  }

  changeLocation(event: any)
  {
    this.location = event.target.value;
    this.route.queryParams
    .pipe(takeUntil(this.unSubscribe))
    .subscribe(params => {
      this.query = params['Service'];
    });
    this.pageNumber = 1;
    this.searchService.getSearchResults(this.query,this.location,this.pageNumber).subscribe(posts =>{
      this.searchService.searchData.next(posts);
    });
    this.router.navigate([],{queryParams: {Service: this.query,Location: this.location, PageNumber: this.pageNumber}})
  }
  openModal(id?: string)
  {
    const modalRef = this.modalService.open( ViewDetailComponent);
    this.searchService.getProviderById(id).subscribe(posts =>{
      this.searchService.providerData.next(posts);
    });
    this.router.navigate([],{queryParams: {Service: this.query,Location: this.location, PageNumber: this.pageNumber, id:id}})
  }

  ngOnDestroy() {
      this.unSubscribe.next()
      this.unSubscribe.complete()
  }
}
