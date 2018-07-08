import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html' 
})
export class AppComponent {


	public Getlink: number = 0;

	public get IsHomepage(): boolean {
	    return this.router.url == '/'; 
	}
	public get IsArt(): boolean {
		this.Getlink = this.router.url.indexOf('art');
		return this.Getlink >= 0;
	}


	constructor(private router:Router) {}  
	ngOnInit() { 

    }
	
}