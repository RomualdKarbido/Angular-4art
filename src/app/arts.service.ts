import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs-compat/add/operator/map';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'

})
export class ArtsService {

  constructor(private http: Http) {
  }


  GetArtPage(IdCat) {
    return this.http.get('http://4arts.conglo.ru/wp-json/wp/v2/pages/?categories=' + IdCat)
      .map(response => response.json());
  }

  GetArtPageShow(IdPage: any) {
    return this.http.get('http://4arts.conglo.ru/wp-json/wp/v2/pages/' + IdPage)
      .map(response => response.json());
  }

  GetArtGallery(IdGallRouter) {
    return this.http.get('http://4arts.conglo.ru/wp-json/wp/v2/pages/?categories=' + IdGallRouter)
      .map(response => response.json());
  }

  GetArtGalleryInfo(IdGal) {
    return this.http.get('http://4arts.conglo.ru/wp-json/wp/v2/categories/' + IdGal)
      .map(response => response.json());
  }

  GetArtGalleryCatImg(IdGal) {
    return this.http.get('http://4arts.conglo.ru/wp-json/wp/v2/media/?categories=' + IdGal)
      .map(response => response.json());
  }

  GetArtCategory() {
    return this.http.get('http://4arts.conglo.ru/wp-json/wp/v2/categories')
      .map(response => response.json());
  }

  //запрос на фото
  GetArtGalleryImg(num) {
    return this.http.get('http://4arts.conglo.ru/wp-json/wp/v2/media/' + num)
      .map(response => response.json());
  }
}
