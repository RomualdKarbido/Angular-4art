import { Component, OnInit } from '@angular/core';
import { NewsService } from "../news.service";
import { Observable } from 'rxjs-compat';

import { Http } from '@angular/http';
import 'rxjs-compat/add/operator/map'
import {Observable} from 'rxjs';





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
		})



		var obs2 = this.newsService.GetNewsCat();
		obs2.subscribe( ic => {
			this.Cat = ic;
		})

		var obs3 = this.newsService.GetNewsImg();
		obs3.subscribe( im => {
			this.ImgN = im;
			console.log(this.ImgN);
		})



		Observable.forkJoin([obs1, obs2, obs3]).subscribe(() => {
			this.IsVisiblePreloader = false;
			// ImgNewsID = this.News.featured_media.map(x);
			// return: x;
			// console.log(x);

			for (var v=0; v<this.News.length; v++) {


				this.ImgNewsID[v] = this.News[v].featured_media
				console.log('Id картинки -  'this.ImgNewsID[v]);

				this.linkImg[v] = 'http://www.nd-ms.ru/wp-json/wp/v2/media/' + this.News[v].featured_media;
				console.log('запрос на картинку -  'this.linkImg[v]);

				var obs5 = this.http.get("''" + this.linkImg[v] + "''").map(response => response.json());

				obs5.subscribe( xx => {
						this.linkImg2[v] = xx;
						console.log('ответ на картинку -  'this.linkImg2[v].media_details.sizes.artist_midle.source_url);
				});
			}
		});
	}

	public getcategorynamebyid(id: any):string {
		for (var i=0; i<this.Cat.length; i++) {
			if (this.Cat[i].id == id) {
				return this.Cat[i].name;
			}
		}
		return '';
	}



	public getnewsbyid(idd: any):string {
		for(var d=0; d<this.ImgN.length; d++) {
			if (this.ImgN[d].id == idd) {
				return this.ImgN[d].media_details.sizes.artist_midle.source_url
			}
		}
		return '';
	};



}
