import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Movie} from "../../model/classes";
import {MoviesService} from "../../services/movies.service";

/**
 * Generated class for the UpcomingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-upcoming',
  templateUrl: 'upcoming.html',
})
export class UpcomingPage {

  movies: Movie[];
  searchRes: Movie[];
  searchStr: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,private _moviesService: MoviesService) {
    this._moviesService.getUpComingMovies().subscribe(res => {
      this.movies = res;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UpcomingPage');
  }

  searchMovies() {
    this._moviesService.searchMovies(this.searchStr).subscribe(res => {
      this.searchRes = res;
    })
  }
}
