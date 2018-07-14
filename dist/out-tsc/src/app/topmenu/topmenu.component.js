"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
// import { ActivatedRoute } from '@angular/router';
var router_1 = require("@angular/router");
var TopmenuComponent = /** @class */ (function () {
    function TopmenuComponent(router) {
        // console.log(this.router.config + ' - роутер');
        // console.log(this.router.paramsInheritanceStrategy + ' - роутер');
        this.router = router;
        this.TopMenulist = [
            { name: ' ', link: '/' },
            { name: 'Контакты', link: '/page/contact' },
            { name: 'Новости', link: '/all_news' }
        ];
        this.TopMenuArts = [
            { name: 'Евгений Расторгуев', cat: '6', link: '/art/6/19' },
            { name: 'Тамара Гусева', cat: '8', link: '/art/8/30' },
            { name: 'Людмила Варламова', link: '/art/lv' },
            { name: 'Наталья Варламова', link: '/art/nv' }
        ];
    }
    // this.route.params.subscribe(params => {
    // 	var linkCat = +params['link'];
    // 	console.log(this.linkCat);
    // });
    // isActiveMenuItem(menu: any) {
    //
    // 	return this.router.url.indexOf(menu.link) != -1 &&  menu.link != '/';
    // }
    // isActiveArtItem(art: any) {
    //
    // 	return art.link == this.router.url;
    //
    // }
    TopmenuComponent.prototype.ngOnInit = function () {
    };
    TopmenuComponent = __decorate([
        core_1.Component({
            selector: 'app-topmenu',
            templateUrl: './topmenu.component.html'
        }),
        __metadata("design:paramtypes", [router_1.Router])
    ], TopmenuComponent);
    return TopmenuComponent;
}());
exports.TopmenuComponent = TopmenuComponent;
//# sourceMappingURL=topmenu.component.js.map