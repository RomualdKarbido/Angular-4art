import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {NewsService} from '../news.service';
import {Observable} from 'rxjs-compat';
import {Http} from '@angular/http';

import * as $ from 'jquery';
import 'slick-carousel/slick/slick';
import {MenuService} from '../menu.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  providers: [NewsService, MenuService]

})

export class HomePageComponent implements OnInit {

  MenuArts = {};


  News = [];
  News2 = [];
  Cat = [];
  ImgN = [];
  ImgNewsID = [];
  linkImg = [];

  scrollToTop(e, outlet) {
    outlet.scrollTop = 0;
  }

  public IsVisiblePreloader = true;
  public newPage = 1;

  private getNewsByFeaturedMediaId(mediaId: any): any {
    for (let i = 0; i < this.News.length; i++) {
      if (this.News[i].featured_media == mediaId) {
        return this.News[i];
      }
    }

    return null;
  }

  public getcategorynamebyid(id: any): string {
    for (let i = 0; i < this.Cat.length; i++) {
      if (this.Cat[i].id == id) {
        return this.Cat[i].name;
      }
    }
    return '';
  }


  constructor(
    private router: Router,
    private newsService: NewsService,
    private http: Http,
    private MenuService: MenuService) {

    //меню авторов
    let menuautor3: any = this.MenuService.GetMenu(12);
    menuautor3.subscribe(i => {
      this.MenuArts = i.items;
      console.log(this.MenuArts);
    });

    let obs1 = this.newsService.GetNews(this.newPage);
    obs1.subscribe(i => {
      this.News = i;

      for (let r = 0; r < this.News.length; r++) {
        this.linkImg[r] = 'http://www.nd-ms.ru/wp-json/wp/v2/media/' + this.News[r].featured_media;

        let obs5 = this.http.get(this.linkImg[r]).map(response => response.json());
        obs5.subscribe(xx => {
          let foundedNews = this.getNewsByFeaturedMediaId(xx.id);
          if (foundedNews) {
            foundedNews.headimg = xx.source_url;
          }
        });
      }
    });

    let obs2 = this.newsService.GetNewsCat();
    obs2.subscribe(ic => {
      this.Cat = ic;
    });

    Observable.forkJoin([obs1, obs2]).subscribe(() => {
      this.IsVisiblePreloader = false;

      $('.top-slider').slick({
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1

      });

      $('.news-slider__wrap').slick({
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        edgeFriction: false,
        arrows: false,
        responsive: [
          {
            breakpoint: 1500,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 720,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });
    });

  }


  ngOnInit() {

  }

}
