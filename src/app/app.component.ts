import {Component, ViewChild} from '@angular/core';
import {Nav, Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

import {HomePage} from '../pages/home/home';
import {UpcomingPage} from "../pages/upcoming/upcoming";
import {PopularSeriesPage} from "../pages/popular-series/popular-series";
import {Genre} from "../model/classes";
import {GenrePage} from "../pages/genre/genre";
import {MoviesService} from "../services/movies.service";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  iconMenu = {
    theme: 'ios',
    type: 'hamburger'
  };
  rootPage: any = HomePage;
  @ViewChild(Nav) nav: Nav;
  genres: Genre[];

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private _moviesServices: MoviesService) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    this._moviesServices.getGenres().subscribe(res => {
      this.genres = res;
      console.log(this.genres);
    });
  }

  openMovies() {
    this.nav.setRoot(UpcomingPage, {});
  }

  openSeries() {
    this.nav.setRoot(PopularSeriesPage, {});
  }

  openPage(genreObj: Genre) {
    this.nav.setRoot(GenrePage, {
      id: genreObj.id,
      name: genreObj.name
    });
  }

}

