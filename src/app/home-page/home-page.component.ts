import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 

@Component({
	selector: 'app-home-page',
	templateUrl: './home-page.component.html'
})

export class HomePageComponent implements OnInit {

	MenuArts = [
		{name: 'Евгений Расторгуев', link: '/art/er'},
		{name: 'Тамара Гусева', link: '/art/tg'},
		{name: 'Людмила Варламова', link: '/art/lv'},
		{name: 'Наталья Варламова', link: '/art/nv'} 
	]

	constructor(private router:Router) {}
