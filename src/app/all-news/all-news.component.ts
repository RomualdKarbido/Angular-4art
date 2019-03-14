import { Component, OnInit } from '@angular/core';
import { NewsService } from "../news.service";
import { Observable } from 'rxjs-compat';
import { Http } from '@angular/http';

// import { Http } from '@angular/http';
// import 'rxjs-compat/add/operator/map'





@Component({
	selector: 'app-all-news',
	templateUrl: './all-news.component.html',
	providers:[NewsService]
})


export class AllNewsComponent implements OnInit {

	News  = [];
	News2  = [];
	Cat = [];
	ImgN = [];
	ImgNewsID = [];
	linkImg = [];

	scrollToTop(e, outlet){
		outlet.scrollTop = 0;
	}

	public IsVisiblePreloader: boolean = true;
	public newPage: number = 1;
	public More(click) {
		this.IsVisiblePreloader = true;
		this.newPage = this.newPage + 1;

		var obs1 = this.newsService.GetNews(this.newPage);

		obs1.subscribe( i => {
			this.News2 = i;
			for(var g=0; g<this.News2.length; g++) {
				this.News.push(this.News2[g]);
			}
			for(var r=0; r<this.News.length; r++) {
				this.linkImg[r] = 'http://www.nd-ms.ru/wp-json/wp/v2/media/' + this.News[r].featured_media;


				var obs5 = this.http.get(this.linkImg[r]).map(response => response.json());
				obs5.subscribe( xx => {
					var foundedNews = this.getNewsByFeaturedMediaId(xx.id);
					if(foundedNews)
						foundedNews.headimg = xx.source_url;
				});
			}
		});
		Observable.forkJoin([obs1]).subscribe(() => {
			this.IsVisiblePreloader = false;
		})
	}

	constructor(private newsService: NewsService, private http: Http) {

		var obs1 = this.newsService.GetNews(this.newPage);
		obs1.subscribe( i => {
			this.News = i;
			// console.log(this.News);

			for(var r=0; r<this.News.length; r++) {
				this.linkImg[r] = 'http://www.nd-ms.ru/wp-json/wp/v2/media/' + this.News[r].featured_media;
				// console.log('запрос на img - ' + ' -' + this.linkImg[r]);

				var obs5 = this.http.get(this.linkImg[r]).map(response => response.json());
				obs5.subscribe( xx => {
					var foundedNews = this.getNewsByFeaturedMediaId(xx.id);
					if(foundedNews)
						foundedNews.headimg = xx.source_url;
				});
			}
		});

		var obs2 = this.newsService.GetNewsCat();
		obs2.subscribe( ic => {
			this.Cat = ic;
		});

		Observable.forkJoin([obs1, obs2]).subscribe(() => {
			this.IsVisiblePreloader = false;
		})
	}




	private getNewsByFeaturedMediaId(mediaId: any) : any {
		for(var i = 0; i < this.News.length; i++)
		{
			if(this.News[i].featured_media == mediaId)
				return this.News[i];
		}

		return null;
	}

	public getcategorynamebyid(id: any):string {
		for (var i=0; i<this.Cat.length; i++) {
			if (this.Cat[i].id == id) {
				return this.Cat[i].name;
			}
		}
		return '';
	}



	ngOnInit() {

	}
}
