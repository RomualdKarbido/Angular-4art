import {Component, OnInit} from '@angular/core';
import {ArtsService} from '../../arts.service';
import {MenuService} from '../../menu.service';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';

@Component({
  selector: 'app-autorcart',
  templateUrl: './autorcart.component.html',
  providers: [ArtsService, MenuService]
})

export class AutorcartComponent implements OnInit {


  public Catmass: any = {};
  public mediaImg: any = '';
  public AutorLink: any = '';
  public IdCat = 0;
  public mediaImgOn: boolean = false;



  constructor(private ArtsService: ArtsService,
              private MenuService: MenuService,
              private route: ActivatedRoute,
              private router: Router) {

    this.route.params.subscribe(params => {
      this.IdCat = +params['cat'];
      // console.log(this.IdCat + ' - id cat');

      var obs20: any = this.ArtsService.GetArtGalleryInfo(this.IdCat);
      obs20.subscribe(g => {
        this.Catmass = g;
        // console.log(this.Catmass);
      });
      var obs21: any = this.ArtsService.GetArtGalleryCatImg(this.IdCat);
      obs21.subscribe(t => {
        this.mediaImgOn = true;
        this.mediaImg = t[0].source_url;
        // console.log(this.mediaImg);
      });
      //получаем ссылку на стр автора
      let obs25: any = this.MenuService.GetMenu(12);
      obs25.subscribe(i => {
        const LeftMenuArtsNew: any = i.items;
        for (let n = 0; n < LeftMenuArtsNew.length; n++) {
          if (LeftMenuArtsNew[n].object_id == this.IdCat) {
            this.AutorLink = LeftMenuArtsNew[n].children;
          }
        }
      });
    });

  }

  ngOnInit() {
  }

}
