import { Component, OnInit } from '@angular/core';
import { ArtsService } from "../../arts.service";
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { Observable } from 'rxjs-compat';
import { Http } from '@angular/http';



@Component({
	selector: 'app-gallery',
	templateUrl: './gallery.component.html',
	providers:[ArtsService],
})
export class GalleryComponent implements OnInit {

	public Gallery: any = []; // массив страниц галерей с родительским id
	public ImgMass: any = []; //ссылки на фото

	IdChild = 0;
	ArtPagenew = [];
	CategoryData = {
		name: '',
		des: '',
	};





	public GalleryCart: any = [];
	public Linklink = '';




	//конструктор
	constructor(private ArtsService: ArtsService, private route: ActivatedRoute, private router:Router) {


	//Ищем потомков текущей категории
	this.route.params.subscribe(params => {
			var IdCat = +params['cat']; // (+) converts string 'id' to a number
			console.log(IdCat);

			var obs4 = this.ArtsService.GetArtCategory();
			obs4.subscribe( g => {
				this.ArtPagenew = g;

				for (var i = 0; i < this.ArtPagenew.length; i++) {
					if (this.ArtPagenew[i].parent == IdCat) {
						console.log('КАТЕГОРИЯ - ' + this.ArtPagenew[i].id);
						this.IdChild = this.ArtPagenew[i].id;
						this.CategoryData.name = this.ArtPagenew[i].name;
						this.CategoryData.des = this.ArtPagenew[i].description;

					}
				};

				//получаем все стр галереи худоника
				var IdGallRouter = this.IdChild;
				var obs3 = this.ArtsService.GetArtGallery(IdGallRouter);


				obs3.subscribe( f => {
					this.Gallery = f;

					for (var n = 0; n < this.Gallery.length; n++) {
						this.Gallery[n];
						console.log(this.Gallery[n].featured_media + ' - все галереи юзера');
						this.pushlinkimg(n);
						// получаем фотку для галереи

					}
				});
			}
		}
	}

		// функция на получения фото
		public pushlinkimg(n:number):void{
			this.ArtsService.GetArtGalleryImg(this.Gallery[n].featured_media).subscribe(value => {
				this.GalleryCart.push(
					{	id: 	this.Gallery[n].featured_media,
						title: this.Gallery[n].title.rendered,
						link:  value.source_url;
					}
				);
			});

	}

	ngOnInit() {
	}


}
