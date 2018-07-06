import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 

import { NewsService } from "../news.service";
import { Observable } from 'rxjs-compat';
import { Http } from '@angular/http';

import * as $ from 'jquery';
import 'slick-carousel/slick/slick';

@Component({
	selector: 'app-home-page',
	templateUrl: './home-page.component.html',
	providers:[NewsService]
})

export class HomePageComponent implements OnInit { 

	MenuArts = [
		{name: 'Евгений Расторгуев', link: '/art/er'},
		{name: 'Тамара Гусева', link: '/art/tg'},
		{name: 'Людмила Варламова', link: '/art/lv'},
		{name: 'Наталья Варламова', link: '/art/nv'} 
	]


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

	

	constructor(private router:Router, private newsService: NewsService, private http: Http) {

		var obs1 = this.newsService.GetNews(this.newPage); 
		obs1.subscribe( i => {
			this.News = i;

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

		var obs2 = this.newsService.GetNewsCat();
		obs2.subscribe( ic => {
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
			 	  edgeFriction: true;
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
		})

	}





	ngOnInit() {
		
	}

}





