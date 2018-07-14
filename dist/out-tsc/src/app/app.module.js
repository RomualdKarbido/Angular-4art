"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var app_component_1 = require("./app.component");
var topmenu_component_1 = require("./topmenu/topmenu.component");
var all_news_component_1 = require("./all-news/all-news.component");
var home_page_component_1 = require("./home-page/home-page.component");
var static_page_component_1 = require("./static-page/static-page.component");
var art_component_1 = require("./art/art.component");
var one_news_component_1 = require("./one-news/one-news.component");
var autorcart_component_1 = require("./art/autorcart/autorcart.component");
var routes = [
    { path: '', component: home_page_component_1.HomePageComponent },
    { path: 'all_news', component: all_news_component_1.AllNewsComponent },
    { path: 'page/:sublink', component: static_page_component_1.StaticPageComponent },
    { path: 'art/:cat/:id', component: art_component_1.ArtComponent },
    { path: 'all_news/news/:id', component: one_news_component_1.OneNewsComponent },
    { path: 'art/:cat/:gal', component: art_component_1.ArtComponent }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                topmenu_component_1.TopmenuComponent,
                all_news_component_1.AllNewsComponent,
                home_page_component_1.HomePageComponent,
                static_page_component_1.StaticPageComponent,
                art_component_1.ArtComponent,
                one_news_component_1.OneNewsComponent,
                autorcart_component_1.AutorcartComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
                router_1.RouterModule.forRoot(routes)
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map