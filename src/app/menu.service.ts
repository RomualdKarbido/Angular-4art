import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs-compat/add/operator/map'
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http: Http) {}

  GetMenu(id){
    return this.http.get('http://4arts.conglo.ru/wp-json/wp-api-menus/v2/menus/' + id)
    .map(response => response.json());
  }
}
