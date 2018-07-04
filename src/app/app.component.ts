import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import {LocationStrategy} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

	home = false;

	constructor(private router:Router, private url:LocationStrategy) {

		// console.log(this.router.url);

		// console.log(this.url.path());
		
		// return this.router.url.indexOf(menu.link) != -1 &&  menu.link != '/';
		// if (this.router.url == 'homepage') {
		// 	this.home = true;
		// }
		// console.log(this.url.path());
		console.log(this.home);
		console.log(this.url.path() +'- url');
		console.log(this.router.url.indexOf('/') +'- url44');

		if (this.router.url.indexOf('/') > -1) {
		  this.home = true;
		  console.log(this.home);
		}
		console.log(router);

	}
	ngOnInit() { 

		// console.log(this.url.path() +'- url2');
  //       if (this.url.path() === '/') {
  //       	this.home = true;
  //       }

        

    }
	
}