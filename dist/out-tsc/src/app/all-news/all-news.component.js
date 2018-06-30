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
var AllNewsComponent = /** @class */ (function () {
    function AllNewsComponent(newsService) {
        this.newsService = newsService;
        this.News = [];
        this.Cat = [];
        this.ImgN = [];
        this.IsVisiblePreloader = true;
    }
    AllNewsComponent.prototype.ngOnInit = function () {
        var _this = this;
        var obs1 = this.newsService.GetNews();
        obs1.subscribe(function (c) {
            _this.News = c;
            console.log(_this.News);
            // this.getnewsbyid(0);
        });
        var obs2 = this.newsService.GetNewsCat();
        obs2.subscribe(function (cn) {
            _this.Cat = cn;
            // console.log(this.Cat); 			
        });
        var obs3 = this.newsService.GetNewsImg();
        obs3.subscribe(function (im) {
            _this.ImgN = im;
            console.log(_this.ImgN);
        });
        rxjs_compat_1.Observable.forkJoin([obs1, obs2, obs3]).subscribe(function () {
            _this.IsVisiblePreloader = false;
        });
    };
    AllNewsComponent.prototype.getcategorynamebyid = function (id) {
        for (var i = 0; i < this.Cat.length; i++) {
            if (this.Cat[i].id == id) {
                return this.Cat[i].name;
            }
        }
        return '';
    };
    AllNewsComponent.prototype.getnewsbyid = function (idd) {
        for (var d = 0; d < this.News.length; d++) {
            if (this.Cat[i].id == id) {
                return this.Cat[i].name;
            }
            console.log(this.News[d].id);
        }
    };
    ;
    AllNewsComponent = __decorate([
        core_1.Component({
            selector: 'app-all-news',
            templateUrl: './all-news.component.html',
            providers: [news_service_1.NewsService]
        }),
        __metadata("design:paramtypes", [news_service_1.NewsService])
    ], AllNewsComponent);
    return AllNewsComponent;
}());
exports.AllNewsComponent = AllNewsComponent;
//# sourceMappingURL=all-news.component.js.map