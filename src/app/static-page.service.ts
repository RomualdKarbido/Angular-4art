import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs-compat/add/operator/map'
import {Observable} from 'rxjs';



@Injectable({
	providedIn: 'root'
})


export class StaticPageService {

	constructor(private http: Http) {}

	GetPage(pageId: any){
		return this.http.get('http://www.nd-ms.ru/wp-json/wp/v2/pages/' + pageId)
		.map(response => response.json());
	}
	GetNews(){
		return this.http.get('http://www.nd-ms.ru/wp-json/wp/v2/posts?per_page=5')
		.map(response => response.json());
	}
}
