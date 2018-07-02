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
	Cat = [];
	ImgN = [];
	ImgNewsID = [];
	linkImg = [];


	public IsVisiblePreloader: boolean = true;


	constructor(private newsService: NewsService, private http: Http) {



		var obs1 = this.newsService.GetNews();
		obs1.subscribe( i => {
			this.News = i;
			console.log(this.News);

			for(var r=0; r<this.News.length; r++) {
				this.linkImg[r] = 'http://www.nd-ms.ru/wp-json/wp/v2/media/' + this.News[r].featured_media;
				console.log('запрос на img - ' + ' -' + this.linkImg[r]);
			
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

		// var obs3 = this.newsService.GetNewsImg();
		// obs3.subscribe( im => {
		// 	this.ImgN = im;
		// 	console.log(this.ImgN);
		// })


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
