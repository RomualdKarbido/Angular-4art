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
var http_1 = require("@angular/http");
require("rxjs-compat/add/operator/map");
var ArtsService = /** @class */ (function () {
    function ArtsService(http) {
        this.http = http;
    }
    ArtsService.prototype.GetArtPage = function (IdCat) {
        return this.http.get('http://4arts.conglo.ru/wp-json/wp/v2/pages/?categories=' + IdCat)
            .map(function (response) { return response.json(); });
    };
    ArtsService.prototype.GetArtPageShow = function (IdPage) {
        return this.http.get('http://4arts.conglo.ru/wp-json/wp/v2/pages/' + IdPage)
            .map(function (response) { return response.json(); });
    };
    ArtsService.prototype.GetArtGallery = function (IdGallRouter) {
        return this.http.get('http://4arts.conglo.ru/wp-json/wp/v2/pages/?categories=' + IdGallRouter)
            .map(function (response) { return response.json(); });
    };
    ArtsService.prototype.GetArtCategory = function () {
        return this.http.get('http://4arts.conglo.ru/wp-json/wp/v2/categories')
            .map(function (response) { return response.json(); });
    };
    ArtsService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [http_1.Http])
    ], ArtsService);
    return ArtsService;
}());
exports.ArtsService = ArtsService;
//# sourceMappingURL=arts.service.js.map