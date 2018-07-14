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
var one_news_service_1 = require("../one-news.service");
var rxjs_compat_1 = require("rxjs-compat");
var router_1 = require("@angular/router");
var router_2 = require("@angular/router");
var OneNewsComponent = /** @class */ (function () {
    function OneNewsComponent(OneNewsService, route, router) {
        var _this = this;
        this.OneNewsService = OneNewsService;
        this.route = route;
        this.router = router;
        this.OneNews = [];
        this.NewsLeft = [];
        this.IsVisiblePreloader = true; //прелоадер
        this.route.params.subscribe(function (params) {
            var newsId = +params['id']; // (+) converts string 'id' to a number
            var obs1 = _this.OneNewsService.GetOneNews(newsId);
            obs1.subscribe(function (i) {
                _this.OneNews = i;
                console.log(_this.OneNews);
            });
            // условия для прелоадера
            rxjs_compat_1.Observable.forkJoin([obs1]).subscribe(function () {
                _this.IsVisiblePreloader = false;
            });
        });
        var obs2 = this.OneNewsService.GetNews();
        obs2.subscribe(function (d) {
            _this.NewsLeft = d;
            console.log(_this.NewsLeft);
        });
    }
    OneNewsComponent.prototype.IdBtn = function () {
        this.IsVisiblePreloader = true;
    };
    OneNewsComponent.prototype.isActiveMenuItem = function (menu) {
        return '/all_news/news/' + menu.id == this.router.url;
    };
    OneNewsComponent.prototype.ngOnInit = function () {
    };
    OneNewsComponent = __decorate([
        core_1.Component({
            selector: 'app-one-news',
            templateUrl: './one-news.component.html',
            providers: [one_news_service_1.OneNewsService],
        }),
        __metadata("design:paramtypes", [one_news_service_1.OneNewsService, router_1.ActivatedRoute, router_2.Router])
    ], OneNewsComponent);
    return OneNewsComponent;
}());
exports.OneNewsComponent = OneNewsComponent;
//# sourceMappingURL=one-news.component.js.map