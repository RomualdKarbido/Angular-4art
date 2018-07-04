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
var news_service_1 = require("../news.service");
var rxjs_compat_1 = require("rxjs-compat");
var http_1 = require("@angular/http");
// import { Http } from '@angular/http';
// import 'rxjs-compat/add/operator/map'
var AllNewsComponent = /** @class */ (function () {
    function AllNewsComponent(newsService, http) {
        var _this = this;
        this.newsService = newsService;
        this.http = http;
        this.News = [];
        this.News2 = [];
        this.Cat = [];
        this.ImgN = [];
        this.ImgNewsID = [];
        this.linkImg = [];
        this.IsVisiblePreloader = true;
        this.newPage = 1;
        var obs1 = this.newsService.GetNews(this.newPage);
        obs1.subscribe(function (i) {
            _this.News = i;
            console.log(_this.News);
            for (var r = 0; r < _this.News.length; r++) {
                _this.linkImg[r] = 'http://www.nd-ms.ru/wp-json/wp/v2/media/' + _this.News[r].featured_media;
                console.log('запрос на img - ' + ' -' + _this.linkImg[r]);
                var obs5 = _this.http.get(_this.linkImg[r]).map(function (response) { return response.json(); });
                obs5.subscribe(function (xx) {
                    var foundedNews = _this.getNewsByFeaturedMediaId(xx.id);
                    if (foundedNews)
                        foundedNews.headimg = xx.source_url;
                });
            }
        });
        var obs2 = this.newsService.GetNewsCat();
        obs2.subscribe(function (ic) {
            _this.Cat = ic;
        });
        rxjs_compat_1.Observable.forkJoin([obs1, obs2]).subscribe(function () {
            _this.IsVisiblePreloader = false;
        });
    }
    AllNewsComponent.prototype.scrollToTop = function (e, outlet) {
        outlet.scrollTop = 0;
    };
    AllNewsComponent.prototype.More = function (click) {
        var _this = this;
        this.IsVisiblePreloader = true;
        this.newPage = this.newPage + 1;
        var obs1 = this.newsService.GetNews(this.newPage);
        obs1.subscribe(function (i) {
            _this.News2 = i;
            for (var g = 0; g < _this.News2.length; g++) {
                _this.News.push(_this.News2[g]);
            }
            for (var r = 0; r < _this.News.length; r++) {
                _this.linkImg[r] = 'http://www.nd-ms.ru/wp-json/wp/v2/media/' + _this.News[r].featured_media;
                var obs5 = _this.http.get(_this.linkImg[r]).map(function (response) { return response.json(); });
                obs5.subscribe(function (xx) {
                    var foundedNews = _this.getNewsByFeaturedMediaId(xx.id);
                    if (foundedNews)
                        foundedNews.headimg = xx.source_url;
                });
            }
        });
        rxjs_compat_1.Observable.forkJoin([obs1]).subscribe(function () {
            _this.IsVisiblePreloader = false;
        });
    };
    AllNewsComponent.prototype.getNewsByFeaturedMediaId = function (mediaId) {
        for (var i = 0; i < this.News.length; i++) {
            if (this.News[i].featured_media == mediaId)
                return this.News[i];
        }
        return null;
    };
    AllNewsComponent.prototype.getcategorynamebyid = function (id) {
        for (var i = 0; i < this.Cat.length; i++) {
            if (this.Cat[i].id == id) {
                return this.Cat[i].name;
            }
        }
        return '';
    };
    AllNewsComponent.prototype.ngOnInit = function () {
    };
    AllNewsComponent = __decorate([
        core_1.Component({
            selector: 'app-all-news',
            templateUrl: './all-news.component.html',
            providers: [news_service_1.NewsService]
        }),
        __metadata("design:paramtypes", [news_service_1.NewsService, http_1.Http])
    ], AllNewsComponent);
    return AllNewsComponent;
}());
exports.AllNewsComponent = AllNewsComponent;
//# sourceMappingURL=all-news.component.js.map