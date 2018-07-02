import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs-compat/add/operator/map'
import {Observable} from 'rxjs';



@Injectable({
  providedIn: 'root'
})


export class OneNewsService {

  constructor(private http: Http) {}

  GetOneNews(){
	return this.http.get('http://www.nd-ms.ru/wp-json/wp/v2/posts/3668')
		.map(response => response.json());
  }
  GetNews(){
		return this.http.get('http://www.nd-ms.ru/wp-json/wp/v2/posts?per_page=12')
			.map(response => response.json());
	}
}
