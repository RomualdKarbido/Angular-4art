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
  ArtPagenew = [];
  ArtPageLeft  = [];
  OnePage = [];
  Gallery = [];

  IdChild = 0;

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
      var obs1 = this.ArtsService.GetArtPage(IdCat);

      obs1.subscribe( p => {
        this.ArtPage = p;

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



    //Ищем потомков текущей категории

    this.route.params.subscribe(params => {
     var IdCat = +params['cat']; // (+) converts string 'id' to a number
     console.log(IdCat);

     var obs4 = this.ArtsService.GetArtCategory();
     obs4.subscribe( g => {
       this.ArtPagenew = g;
       console.log(g);

       for (var i = 0; i < this.ArtPagenew.length; i++) {
         if (this.ArtPagenew[i].parent == IdCat) {
           console.log('Найдено - ' + this.ArtPagenew[i].id);
           this.IdChild = this.ArtPagenew[i].id;

           //получаем все стр галереи худоника
           var IdGallRouter = this.IdChild;
           var obs3 = this.ArtsService.GetArtGallery(IdGallRouter);

           obs3.subscribe( f => {
             this.Gallery = f;
           });
         }
       }
     });
   });


  }



  ngOnInit() {
  }

}
