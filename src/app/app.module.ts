import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {ComponentsModule} from "../components/components.module";
import {MoviesService} from "../services/movies.service";
import {HttpClientModule} from '@angular/common/http';
import {GenrePage} from "../pages/genre/genre";
import {MoviePage} from "../pages/movie/movie";
import {ActorPage} from "../pages/actor/actor";
import {SeriePage} from "../pages/serie/serie";
import {UpcomingPage} from "../pages/upcoming/upcoming";
import {PopularSeriesPage} from "../pages/popular-series/popular-series";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    GenrePage,
    MoviePage,
    UpcomingPage,
    PopularSeriesPage,
    ActorPage,
    SeriePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ComponentsModule,
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    GenrePage,
    MoviePage,
    ActorPage,
    SeriePage,
    UpcomingPage,
    PopularSeriesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MoviesService
  ],
})
export class AppModule {}
