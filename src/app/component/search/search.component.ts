import { AfterContentInit, Component } from '@angular/core';
import { Router } from '@angular/router';
import { empty, Subject } from 'rxjs';
import { SearchResponse } from 'src/app/models/search-response';
import { SearchService } from 'src/app/services/search.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent{

  query: string= "";
  location:string= "";
  pageNumber: number=1;
  
  
  constructor(
    public searchService: SearchService,
    private router: Router
  ){}
 onSearch(){
  this.router.navigate(['/search'],{queryParams: {Service: this.query,Location: this.location, PageNumber: this.pageNumber}})
  this.searchService.getSearchResults(this.query,this.location,this.pageNumber).subscribe(posts =>{
    this.searchService.searchData.next(posts);
  });

 }
}
