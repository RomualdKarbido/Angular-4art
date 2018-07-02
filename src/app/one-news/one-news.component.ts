import { Component, OnInit } from '@angular/core';
import { OneNewsService } from "../one-news.service";
import { Observable } from 'rxjs-compat';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-one-news',
  templateUrl: './one-news.component.html',
  providers:[OneNewsService],
})
export class OneNewsComponent implements OnInit {

  OneNews  = [];
  NewsLeft  = [];
  public IsVisiblePreloader: boolean = true; //прелоадер

  IdBtn(event) { 
    console.log('IdBtn - 'event);
    this.IsVisiblePreloader = true;
   
    // event = true;
    // return event == this.router.url;
  }


  constructor(private OneNewsService: OneNewsService, private route: ActivatedRoute, private router:Router) {
  // constructor() {

    this.route.params.subscribe(params => {
       var newsId = +params['id']; // (+) converts string 'id' to a number

       var obs1 = this.OneNewsService.GetOneNews(newsId);
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
       // In a real app: dispatch action to load the details here.
    });
  }

  isActiveMenuItem(menu: any) {
      return '/all_news/news/' + menu.id == this.router.url; 
      console.log(menu.id + 'sdfsf'); 
   }

  ngOnInit() {
  }
  // isActiveMenu(menu: any) {
  //   return menu.link == this.router.url;
  //   console.log(menu);
  // }


}
