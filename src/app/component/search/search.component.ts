import { AfterContentInit, Component } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements AfterContentInit{

  allPosts:any;
  constructor(
    public searchService: SearchService
  ){}
  ngAfterContentInit() {
    this.searchService.getSearchResults().subscribe(posts =>{
      this.allPosts = posts
    });
  }
 

}
