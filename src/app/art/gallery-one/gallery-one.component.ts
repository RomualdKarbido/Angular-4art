import {Component, OnInit} from '@angular/core';
import {ArtsService} from '../../arts.service';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';
import {Location} from '@angular/common';
import {Observable} from 'rxjs-compat';


// @ts-ignore
@Component({
  selector: 'app-gallery-one',
  templateUrl: './gallery-one.component.html',
  providers: [ArtsService]
})
export class GalleryOneComponent implements OnInit {

  public IdCat: any = 0;
  public Iditem: any = 0;

  public GalleryPage: any = {};
  public GalleryPageOn: boolean = false;
  public GalleryPagePhotosId: any = [];
  public photolist: any = [];
  public photolistnew: any = [];
  public photolistnewOn: any = false;
  public openmodal: boolean = false;
  public modalpicture: any = 0;
  public catImg: any = null;
  public catDescription: any = null;
  public IsVisiblePreloader: boolean = true;


  constructor(private artservice: ArtsService,
              private route: ActivatedRoute,
              private router: Router,
              private location: Location) {

    //Ищем потомков текущей категории
    this.route.params.subscribe(params => {
      this.IdCat = +params['cat'];
      this.Iditem = +params['id'];

      let obs100: any = this.artservice.GetGallPage(this.Iditem);
      obs100.subscribe(g => {
        this.GalleryPage = g;
        this.GalleryPageOn = true;
        // console.log(this.GalleryPage);
        this.catImg = this.GalleryPage.better_featured_image.source_url;
        this.catDescription = this.GalleryPage.acf.description_gall;

      });
      //фотокарточки текущей галерии
      let obs200: any = this.artservice.GetGallPagePhotos(this.Iditem);
      obs200.subscribe(t => {
        this.GalleryPagePhotosId = t.split(',');
        for (let f = 0; f < this.GalleryPagePhotosId.length; f++) {
          let obs300: any = this.artservice.GetArtGalleryImg(this.GalleryPagePhotosId[f]);
          obs300.subscribe(s => {
            this.photolist.push(s);
            if (f == this.GalleryPagePhotosId.length - 1) {
              for (let g = 0; g < this.GalleryPagePhotosId.length; g++) {
                for (let t = 0; t < this.photolist.length; t++) {
                  if (this.GalleryPagePhotosId[g] == this.photolist[t].id) {
                    this.photolistnew.push(this.photolist[t]);
                    this.photolistnewOn = true;
                  }
                }
              }
            }
          });
          Observable.forkJoin([obs300]).subscribe(() => {
            this.IsVisiblePreloader = false;
          });
        }
      });

    });
  }

  backClicked() {
    this.location.back();
  }

  openModal(picture) {
    this.openmodal = true;
    this.modalpicture = picture;
  }

  closeModal() {
    this.openmodal = false;
  }


  ngOnInit() {
  }
}
