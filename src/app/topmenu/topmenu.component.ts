import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs-compat';
// import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';


@Component({
	selector: 'app-topmenu',
	templateUrl: './topmenu.component.html'
})
export class TopmenuComponent implements OnInit {


	TopMenulist = [
		{name: ' ' , link: '/'},
		{name: 'Контакты', link: '/page/contact'},
		{name: 'Новости', link: '/all_news'},
	]

	TopMenuArts = [
		{name: 'Евгений Расторгуев', cat: '6', link: '/art/6/19'},
		{name: 'Тамара Гусева', cat: '8',  link: '/art/8/30'},
		{name: 'Людмила Варламова', link: '/art/lv'},
		{name: 'Наталья Варламова', link: '/art/nv'},
	];



  constructor( private router:Router) {



	}

	ngOnInit() {
	}
}
