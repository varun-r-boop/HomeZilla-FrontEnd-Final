import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SearchResponse } from '../models/search-response';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  searchOption: any;
  public postsData!: SearchResponse[];
  public searchPostUrl = "https://localhost:7263/api/Search"
  constructor(private http : HttpClient) { }
  getSearchResults(query:string,location:string,pageNumber:number): Observable<SearchResponse[]>{
    var res = this.http.get<SearchResponse[]>(`https://localhost:7263/api/Search?Service=${query}`);
    console.log(res);
    return res;
  }

}
