import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Observable} from 'rxjs-compat';

@Injectable({
  providedIn: 'root'
})
export class SearchserviceService {

  public searchResultPage: any = [];
  public searchResultPost: any = [];

  constructor(private http: Http) {}

  serchSend(searchsend){
    return this.http.get('http://4arts.conglo.ru/wp-json/wp/v2/pages?search=' + searchsend)
      .map(response => response.json());
  }
  serchSendPost(searchsend){
    return this.http.get('http://www.nd-ms.ru/wp-json/wp/v2/posts?search=' + searchsend)
      .map(response => response.json());
  }

  searchSend(send) {
    let obs1: any = this.serchSend(send);
    obs1.subscribe(i => {
      this.searchResultPage = i;
      console.log(i);
    });
    let obs2: any = this.serchSendPost(send);
    obs2.subscribe(d => {
      this.searchResultPost = d;
      console.log(d);
    });
    // Observable.forkJoin([obs1, obs2]).subscribe(() => {
    // });
  }

}
