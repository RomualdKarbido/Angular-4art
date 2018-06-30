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
var router_1 = require("@angular/router");
var TopmenuComponent = /** @class */ (function () {
    function TopmenuComponent(router) {
        this.router = router;
        this.TopMenulist = [
            { name: 'Главная', link: '/' },
            { name: 'Контакты', link: '/page/contact' },
            { name: 'Новости', link: '/all_news' }
        ];
        this.TopMenuArts = [
            { name: 'Евгений Расторгуев', link: '/art/er' },
            { name: 'Тамара Гусева', link: '/art/tg' },
            { name: 'Людмила Варламова', link: '/art/lv' },
            { name: 'Наталья Варламова', link: '/art/nv' }
        ];
    }
    TopmenuComponent.prototype.ngOnInit = function () {
    };
    TopmenuComponent.prototype.isActiveMenuItem = function (menu) {
        return menu.link == this.router.url;
    };
    TopmenuComponent.prototype.isActiveArtItem = function (art) {
        return art.link == this.router.url;
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