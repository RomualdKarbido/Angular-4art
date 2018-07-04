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
var static_page_service_1 = require("../static-page.service");
var rxjs_compat_1 = require("rxjs-compat");
var router_1 = require("@angular/router");
var router_2 = require("@angular/router");
var StaticPageComponent = /** @class */ (function () {
    function StaticPageComponent(StaticPageService, route, router) {
        // constructor() {
        var _this = this;
        this.StaticPageService = StaticPageService;
        this.route = route;
        this.router = router;
        this.Page = [];
        this.NewsLeft = [];
        this.IsVisiblePreloader = true; //прелоадер
        this.route.params.subscribe(function (params) {
            // var pageId = +params['id']; // (+) converts string 'id' to a number
            var pageId = 3370;
            var obs1 = _this.StaticPageService.GetPage(pageId);
            obs1.subscribe(function (i) {
                _this.Page = i;
                console.log(_this.Page);
            });
            var obs2 = _this.StaticPageService.GetNews();
            obs2.subscribe(function (d) {
                _this.NewsLeft = d;
                console.log(_this.NewsLeft);
            });
            // условия для прелоадера
            rxjs_compat_1.Observable.forkJoin([obs1, obs2]).subscribe(function () {
                _this.IsVisiblePreloader = false;
            });
        });
    }
    StaticPageComponent.prototype.IdBtn = function (event) {
        console.log('IdBtn - ', event);
        this.IsVisiblePreloader = true;
    };
    StaticPageComponent.prototype.isActiveMenuItem = function (menu) {
        return '/all_news/news/' + menu.id == this.router.url;
        console.log(menu.id + 'sdfsf');
    };
    StaticPageComponent.prototype.ngOnInit = function () {
    };
    StaticPageComponent = __decorate([
        core_1.Component({
            selector: 'app-static-page',
            templateUrl: './static-page.component.html',
            providers: [static_page_service_1.StaticPageService],
        }),
        __metadata("design:paramtypes", [static_page_service_1.StaticPageService, router_1.ActivatedRoute, router_2.Router])
    ], StaticPageComponent);
    return StaticPageComponent;
}());
exports.StaticPageComponent = StaticPageComponent;
//# sourceMappingURL=static-page.component.js.map