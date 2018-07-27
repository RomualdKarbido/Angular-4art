import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs-compat';
import {ActivatedRoute} from '@angular/router';
import {MenuService} from '../menu.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-topmenu',
  templateUrl: './topmenu.component.html',
  providers: [MenuService]
})
export class TopmenuComponent implements OnInit {


  TopMenulist = [
    {name: ' ', link: '/'},
    {name: 'Контакты', link: '/page/contact'},
    {name: 'Новости', link: '/all_news'},
  ];


  public TopMenuArtsNew: any = [];

  constructor(
    private MenuService: MenuService,
    private route: ActivatedRoute,
    private router: Router) {

    var menuautor: any = this.MenuService.GetMenu(12);
    menuautor.subscribe(i => {
      this.TopMenuArtsNew = i.items;
    });
  }

  ngOnInit() {
  }
}
