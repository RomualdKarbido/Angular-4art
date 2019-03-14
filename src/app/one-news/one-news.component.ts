import {Component, OnInit} from '@angular/core';
import {OneNewsService} from '../one-news.service';
import {Observable} from 'rxjs-compat';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';

@Component({
  selector: 'app-one-news',
  templateUrl: './one-news.component.html',
  providers: [OneNewsService],
})
export class OneNewsComponent implements OnInit {

  OneNews = [];
  NewsLeft = [];
  public IsVisiblePreloader: boolean = true; //прелоадер

  IdBtn() {
    this.IsVisiblePreloader = true;
  }


  constructor(private OneNewsService: OneNewsService, private route: ActivatedRoute, private router: Router) {


    this.route.params.subscribe(params => {
      var newsId = +params['id']; // (+) converts string 'id' to a number

      var obs1 = this.OneNewsService.GetOneNews(newsId);
      obs1.subscribe(i => {
        this.OneNews = i;
        console.log(this.OneNews);
      });

      // условия для прелоадера
      Observable.forkJoin([obs1]).subscribe(() => {
        this.IsVisiblePreloader = false;
      });
    });

    var obs2 = this.OneNewsService.GetNews();
    obs2.subscribe(d => {
      this.NewsLeft = d;
      console.log(this.NewsLeft);
    });
  }

  isActiveMenuItem(menu: any) {
    return '/all_news/news/' + menu.id == this.router.url;
  }

  ngOnInit() {
  }
}
