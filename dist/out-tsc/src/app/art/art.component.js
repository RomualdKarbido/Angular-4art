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
var arts_service_1 = require("../arts.service");
var router_1 = require("@angular/router");
var router_2 = require("@angular/router");
var ArtComponent = /** @class */ (function () {
    function ArtComponent(ArtsService, route, router) {
        var _this = this;
        this.ArtsService = ArtsService;
        this.route = route;
        this.router = router;
        this.Gall = [];
        this.ArtPage = [];
        this.ArtPagenew = [];
        this.ArtPageLeft = [];
        this.OnePage = [];
        this.Gallery = [];
        this.IdChild = 0;
        //получаем все статические стр художника  
        this.route.params.subscribe(function (params) {
            var IdCat = +params['cat']; // (+) converts string 'id' to a number
            var obs1 = _this.ArtsService.GetArtPage(IdCat);
            obs1.subscribe(function (p) {
                _this.ArtPage = p;
            });
        });
        // получаем содержимое страницы в зависимости от id
        this.route.params.subscribe(function (params) {
            var IdPage = +params['id']; // (+) converts string 'id' to a number
            var obs2 = _this.ArtsService.GetArtPageShow(IdPage);
            obs2.subscribe(function (d) {
                _this.OnePage = d;
            });
        });
        //Ищем потомков текущей категории
        this.route.params.subscribe(function (params) {
            var IdCat = +params['cat']; // (+) converts string 'id' to a number
            console.log(IdCat);
            var obs4 = _this.ArtsService.GetArtCategory();
            obs4.subscribe(function (g) {
                _this.ArtPagenew = g;
                console.log(g);
                for (var i = 0; i < _this.ArtPagenew.length; i++) {
                    if (_this.ArtPagenew[i].parent == IdCat) {
                        console.log('Найдено - ' + _this.ArtPagenew[i].id);
                        _this.IdChild = _this.ArtPagenew[i].id;
                    }
                }
            });
        });
    }
    ArtComponent.prototype.IdPage = function () {
        // IdPageCat = this.OnePage.categories;
        // IdPageId = this.OnePage.id;
        // 
        // console.log(this.OnePage.id + ' - id' );
        // console.log(this.OnePage.categories + ' - Cat' );
    };
    ArtComponent.prototype.ngOnInit = function () {
    };
    ArtComponent = __decorate([
        core_1.Component({
            selector: 'app-art',
            templateUrl: './art.component.html',
            providers: [arts_service_1.ArtsService]
        }),
        __metadata("design:paramtypes", [arts_service_1.ArtsService, router_1.ActivatedRoute, router_2.Router])
    ], ArtComponent);
    return ArtComponent;
}());
exports.ArtComponent = ArtComponent;
//# sourceMappingURL=art.component.js.map