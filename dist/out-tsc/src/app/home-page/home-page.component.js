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
var news_service_1 = require("../news.service");
var rxjs_compat_1 = require("rxjs-compat");
var http_1 = require("@angular/http");
var $ = require("jquery");
require("slick-carousel/slick/slick");
var HomePageComponent = /** @class */ (function () {
    function HomePageComponent(router, newsService, http) {
        var _this = this;
        this.router = router;
        this.newsService = newsService;
        this.http = http;
        this.MenuArts = [
            { name: 'Евгений Расторгуев', link: '/art/er' },
            { name: 'Тамара Гусева', link: '/art/tg' },
            { name: 'Людмила Варламова', link: '/art/lv' },
            { name: 'Наталья Варламова', link: '/art/nv' }
        ];
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
        var obs2 = this.newsService.GetNewsCat();
        obs2.subscribe(function (ic) {
            _this.Cat = ic;
        });
        rxjs_compat_1.Observable.forkJoin([obs1, obs2]).subscribe(function () {
            _this.IsVisiblePreloader = false;
            $('.top-slider').slick({
                dots: false,
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1
            });
            $('.news-slider__wrap').slick({
                dots: true,
                infinite: true,
                slidesToShow: 4,
                slidesToScroll: 4,
                edgeFriction: false,
                arrows: false,
                responsive: [
                    {
                        breakpoint: 1500,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3,
                            infinite: true,
                            dots: true
                        }
                    },
                    {
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2,
                            infinite: true,
                            dots: true
                        }
                    },
                    {
                        breakpoint: 720,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                ]
            });
        });
    }
    HomePageComponent.prototype.scrollToTop = function (e, outlet) {
        outlet.scrollTop = 0;
    };
    HomePageComponent.prototype.getNewsByFeaturedMediaId = function (mediaId) {
        for (var i = 0; i < this.News.length; i++) {
            if (this.News[i].featured_media == mediaId)
                return this.News[i];
        }
        return null;
    };
    HomePageComponent.prototype.getcategorynamebyid = function (id) {
        for (var i = 0; i < this.Cat.length; i++) {
            if (this.Cat[i].id == id) {
                return this.Cat[i].name;
            }
        }
        return '';
    };
    HomePageComponent.prototype.ngOnInit = function () {
    };
    HomePageComponent = __decorate([
        core_1.Component({
            selector: 'app-home-page',
            templateUrl: './home-page.component.html',
            providers: [news_service_1.NewsService]
        }),
        __metadata("design:paramtypes", [router_1.Router, news_service_1.NewsService, http_1.Http])
    ], HomePageComponent);
    return HomePageComponent;
}());
exports.HomePageComponent = HomePageComponent;
//# sourceMappingURL=home-page.component.js.map