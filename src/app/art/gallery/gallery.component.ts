import {Component, OnInit} from '@angular/core';
import {ArtsService} from '../../arts.service';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';
import {Observable} from 'rxjs-compat';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  providers: [ArtsService]
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

  public IsVisiblePreloader: boolean = true;
  public GalleryCart: any = [];
  public Linklink = '';
  public IdCat: any = '';
  public routgall: any = this.router.url;

  //конструктор
  constructor(private ArtsService: ArtsService,
              private route: ActivatedRoute,
              private router: Router) {



    //Ищем потомков текущей категории
    this.route.params.subscribe(params => {
      this.IdCat = +params['cat'];


      let obs4: any = this.ArtsService.GetArtCategory();
      obs4.subscribe(g => {
        this.ArtPagenew = g;
        for (let i = 0; i < this.ArtPagenew.length; i++) {
          if (this.ArtPagenew[i].parent == this.IdCat) {
            // console.log('КАТЕГОРИЯ - ' + this.ArtPagenew[i].id);
            this.IdChild = this.ArtPagenew[i].id;
            this.CategoryData.name = this.ArtPagenew[i].name;
            this.CategoryData.des = this.ArtPagenew[i].description;
          }
        }

        //получаем все стр галереи худоника
        let IdGallRouter: any = this.IdChild;
        let obs3: any = this.ArtsService.GetArtGallery(IdGallRouter);

        obs3.subscribe(f => {
          this.Gallery = f;
          for (let n = 0; n < this.Gallery.length; n++) {
            // this.Gallery[n];
            this.pushlinkimg(n);
          }
        });
      });
      Observable.forkJoin([obs4]).subscribe(() => {
        this.IsVisiblePreloader = false;
      });
    });
  }

  // функция на получения фото
  public pushlinkimg(n: number): void {
    this.ArtsService.GetArtGalleryImg(this.Gallery[n].featured_media).subscribe(value => {
      if (this.router.url == this.routgall) {

        this.GalleryCart.push(
          {
            id: this.Gallery[n].id,
            idp: this.Gallery[n].featured_media,
            title: this.Gallery[n].title.rendered,
            link: value.source_url
          }
        );
      }
      else {
        this.GalleryCart = [];
        this.routgall = this.router.url;
        this.GalleryCart.push(
          {
            id: this.Gallery[n].id,
            idp: this.Gallery[n].featured_media,
            title: this.Gallery[n].title.rendered,
            link: value.source_url
          }
        );
      }
    });
  }

  ngOnInit() {

    // console.log(this.router.url);
    // console.log(this.routgall);
    // if (this.router.url != this.routgall) {
    //   console.log("обновляем галерею");
    //
    // }
  }


}
