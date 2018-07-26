import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';



import { AppComponent } from './app.component';
import { TopmenuComponent } from './topmenu/topmenu.component';
import { AllNewsComponent } from './all-news/all-news.component';
import { HomePageComponent } from './home-page/home-page.component';
import { StaticPageComponent } from './static-page/static-page.component';
import { ArtComponent } from './art/art.component';
import { OneNewsComponent } from './one-news/one-news.component';
import { AutorcartComponent } from './art/autorcart/autorcart.component';
import { GalleryComponent } from './art/gallery/gallery.component';

const routes = [
  {path: '', component: HomePageComponent},
  {path: 'all_news', component: AllNewsComponent},
  {path: 'page/:sublink', component: StaticPageComponent},
  {path: 'art/:cat/:id', component: ArtComponent},
  {path: 'all_news/news/:id', component: OneNewsComponent},
  {path: 'art/:cat/gallery/:gall', component: GalleryComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    TopmenuComponent,
    AllNewsComponent,
    HomePageComponent,
    StaticPageComponent,
    ArtComponent,
    OneNewsComponent,
    AutorcartComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes),
    HttpClientModule // Импортируем модуль

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
