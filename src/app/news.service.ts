import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs-compat/add/operator/map'
import {Observable} from 'rxjs';



@Injectable({
  providedIn: 'root'
})


export class NewsService {
	constructor(private http: Http) {}

	GetNews(){
		return this.http.get('http://www.nd-ms.ru/wp-json/wp/v2/posts?per_page=9')
			.map(response => response.json());
	}
	GetNewsCat(){
		return this.http.get('http://www.nd-ms.ru/wp-json/wp/v2/categories')
			.map(response => response.json());
	}
	GetNewsImg(){
		return this.http.get('http://www.nd-ms.ru/wp-json/wp/v2/media')
    .map(response => response.json());
	}
}
