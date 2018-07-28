import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs-compat';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';
import {MenuService} from '../menu.service';
import {ArtsService} from '../arts.service';

@Component({
  selector: 'app-art',
  templateUrl: './art.component.html',
  providers: [ArtsService, MenuService]

})


export class ArtComponent implements OnInit {


  Gall = [];
  ArtPage = [];
  ArtPageLeft = [];
  OnePage = [];


  public IdCat = 0;
  public LeftMenuArtsNew: any = [];
  public LeftSubArtsNew: any = [];
  public IsVisiblePreloader: boolean = true;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private ArtsService: ArtsService,
    private MenuService: MenuService) {


    //получаем все статические стр художника
    this.route.params.subscribe(params => {
      this.IdCat = +params['cat']; // (+) converts string 'id' to a number
      let obs24: any = this.MenuService.GetMenu(12);
      obs24.subscribe(i => {
        this.LeftMenuArtsNew = i.items;
        for (let n = 0; n < this.LeftMenuArtsNew.length; n++) {
          if (this.LeftMenuArtsNew[n].object_id == this.IdCat) {
            this.LeftSubArtsNew = this.LeftMenuArtsNew[n].children;
          }
        }
      });
      Observable.forkJoin([obs24]).subscribe(() => {
        this.IsVisiblePreloader = false;
      });
    });

    // получаем содержимое страницы в зависимости от id
    this.route.params.subscribe(params => {
      let IdPage = +params['id']; // (+) converts string 'id' to a number
      let obs2 = this.ArtsService.GetArtPageShow(IdPage);
      obs2.subscribe(d => {
        this.OnePage = d;
      });
      Observable.forkJoin([obs2]).subscribe(() => {
        this.IsVisiblePreloader = false;
      });
    });


  }


  ngOnInit() {
  }

}
