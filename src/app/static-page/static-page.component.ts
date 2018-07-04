import { Component, OnInit } from '@angular/core';
import { StaticPageService } from "../static-page.service";
import { Observable } from 'rxjs-compat';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
	selector: 'app-static-page',
	templateUrl: './static-page.component.html'
	providers:[StaticPageService],
})



export class StaticPageComponent implements OnInit {

	Page  = [];
	NewsLeft  = [];
	public IsVisiblePreloader: boolean = true; //прелоадер

	IdBtn(event) {
		console.log('IdBtn - 'event);
		this.IsVisiblePreloader = true;
	}


	constructor(private StaticPageService: StaticPageService, private route: ActivatedRoute, private router:Router) {
	// constructor() {

		this.route.params.subscribe(params => {
			// var pageId = params['id']; // (+) converts string 'id' to a number
			var pageId = 15;

			var obs1 = this.StaticPageService.GetPage(pageId);
			obs1.subscribe( i => {
				this.Page = i;
				console.log(this.Page);
			});

			// условия для прелоадера
			Observable.forkJoin([obs1]).subscribe(() => {
				this.IsVisiblePreloader = false;
			})
			var obs2 = this.StaticPageService.GetNews();
			obs2.subscribe( d => {
				this.NewsLeft = d;
				console.log(this.NewsLeft);
			});
		});
	}

	isActiveMenuItem(menu: any) {
		return '/all_news/news/' + menu.id == this.router.url;
		console.log(menu.id + 'sdfsf');
	}

	ngOnInit() {
	}
}
