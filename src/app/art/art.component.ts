import { Component, OnInit } from '@angular/core';
import { ArtsService } from "../arts.service";
import { Observable } from 'rxjs-compat';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-art',
  templateUrl: './art.component.html',
  providers:[ArtsService]
})
export class ArtComponent implements OnInit {


  Gall  = [];
  ArtPage  = [];
  ArtPageLeft  = [];
  OnePage = [];


  GalleryLink = {
    cat: '',
    gall: 'all',
  };




  IdPage() {
    // IdPageCat = this.OnePage.categories;
    // IdPageId = this.OnePage.id;
    // console.log(this.OnePage.id + ' - id' );
    // console.log(this.OnePage.categories + ' - Cat' );
  }



  constructor(private ArtsService: ArtsService, private route: ActivatedRoute, private router:Router) {


    //получаем все статические стр художника
    this.route.params.subscribe(params => {
      var IdCat = +params['cat']; // (+) converts string 'id' to a number
      this.GalleryLink.cat = +params['cat']; //ссылка на галерею

      var obs1 = this.ArtsService.GetArtPage(IdCat);

      obs1.subscribe( p => {
        this.ArtPage = p;
        console.log(this.ArtPage);

      });
    });

    // получаем содержимое страницы в зависимости от id
    this.route.params.subscribe(params => {
      var IdPage = +params['id']; // (+) converts string 'id' to a number
      var obs2 = this.ArtsService.GetArtPageShow(IdPage);

      obs2.subscribe( d => {
        this.OnePage = d;
      });
    });


  }



  ngOnInit() {
  }

}
