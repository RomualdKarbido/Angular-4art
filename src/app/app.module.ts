import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';



import { AppComponent } from './app.component';
import { TopmenuComponent } from './topmenu/topmenu.component';
import { AllNewsComponent } from './all-news/all-news.component';
import { HomePageComponent } from './home-page/home-page.component';
import { StaticPageComponent } from './static-page/static-page.component';
import { ArtComponent } from './art/art.component';
import { OneNewsComponent } from './one-news/one-news.component';

const routes = [
  {path: '', component: HomePageComponent}, 
  {path: 'all_news', component: AllNewsComponent},
  {path: 'page/:sublink', component: StaticPageComponent},
  {path: 'art/:sublink', component: ArtComponent},
  {path: 'all_news/news/:id', component: OneNewsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    TopmenuComponent,
    AllNewsComponent,
    HomePageComponent,
    StaticPageComponent,
    ArtComponent,
    OneNewsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
