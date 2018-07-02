import { Component, OnInit } from '@angular/core';
import { OneNewsService } from "../one-news.service";
import { Observable } from 'rxjs-compat';

@Component({
  selector: 'app-one-news',
  templateUrl: './one-news.component.html',
  providers:[OneNewsService],
})
export class OneNewsComponent implements OnInit {

  OneNews  = [];
  NewsLeft  = [];
  public IsVisiblePreloader: boolean = true; //прелоадер

  idbtn(event) { 
    console.log('idbtn - 'event);
  }


  constructor(private OneNewsService: OneNewsService) {
  // constructor() {

    var obs1 = this.OneNewsService.GetOneNews();
		obs1.subscribe( i => {
			this.OneNews = i;
			console.log(this.OneNews);
    });
    var obs2 = this.OneNewsService.GetNews();
		obs2.subscribe( d => {
			this.NewsLeft = d;
			console.log(this.NewsLeft);
    });

    // условия для прелоадера
    Observable.forkJoin([obs1, obs2]).subscribe(() => {
    this.IsVisiblePreloader = false;
  })

  }


  ngOnInit() {
  }
  // isActiveMenu(menu: any) {
  //   return menu.link == this.router.url;
  //   console.log(menu);
  // }


}
