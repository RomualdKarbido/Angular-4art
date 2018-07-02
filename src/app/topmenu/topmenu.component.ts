import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-topmenu',
	templateUrl: './topmenu.component.html'
})
export class TopmenuComponent implements OnInit {


	TopMenulist = [
		{name: 'Главная' , link: '/'},
		{name: 'Контакты', link: '/page/contact'},
		{name: 'Новости', link: '/all_news'}
	]

	TopMenuArts = [
		{name: 'Евгений Расторгуев', link: '/art/er'},
		{name: 'Тамара Гусева', link: '/art/tg'},
		{name: 'Людмила Варламова', link: '/art/lv'},
		{name: 'Наталья Варламова', link: '/art/nv'}
	]

	constructor(private router:Router) {}

	ngOnInit() {

	}



	isActiveMenuItem(menu: any) {
		return menu.link == this.router.url;
	}
	isActiveArtItem(art: any) {
		return art.link == this.router.url;
	}
}
