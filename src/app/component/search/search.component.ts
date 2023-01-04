import { AfterContentInit, Component } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent{

  query: string= "";
  location:string='';
  pageNumber: number=1;
  allPosts:any;
  
  constructor(
    public searchService: SearchService
  ){}
  // ngAfterContentInit() {
   
  //   this.searchService.getSearchResults().subscribe(posts =>{
  //     this.allPosts = posts
  //   });
  // }
 onSearch(){
  
  this.searchService.getSearchResults(this.query,this.location,this.pageNumber).subscribe(posts =>{
    this.allPosts = posts
  });
 }

}
