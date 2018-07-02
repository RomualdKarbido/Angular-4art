import { Component, OnInit } from '@angular/core';
import { NewsService } from "../news.service";
import { Observable } from 'rxjs-compat';

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
	linkImg2 = [];


	public IsVisiblePreloader: boolean = true;


	constructor(private newsService: NewsService) {



		var obs1 = this.newsService.GetNews();
		obs1.subscribe( i => {
			this.News = i;
			console.log(this.News);

			// for(var r=0; r<this.News.length; r++) {
			// 	this.linkImg[r] = 'http://www.nd-ms.ru/wp-json/wp/v2/media/' + this.News[r].featured_media;
			// 	console.log('запрос на img - ' + ' -' + this.linkImg[r]);
			//
			// 	var obs5 = this.http.get(this.linkImg[r])
			// 	.map(response => response.json());
			//
			// 	obs5.subscribe( xx => {
			// 		this.linkImg2[r] = xx;
			// 		console.log('ответ на img -'  this.linkImg2[r].source_url);
			// 		console.log('запрос на img fin - ' + ' -' + this.linkImg[r]);
			// 		// this.News[r].featured_media = this.News[r].featured_media.replace(this.linkImg2[r].source_url));
			// 	});
			// }

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
