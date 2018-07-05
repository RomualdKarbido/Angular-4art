import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html' 
})
export class AppComponent {

	// home = false;

	public get IsHomepage(): boolean {
	    return this.router.url == '/'; 
	}


	constructor(private router:Router) {}
	ngOnInit() { 

    }
	
}