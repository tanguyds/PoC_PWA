import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Genre, Movie} from "../../model/classes";
import {MoviesService} from "../../services/movies.service";

/**
 * Generated class for the GenrePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-genre',
  templateUrl: 'genre.html',
})
export class GenrePage {

  id: number;
  title: string;
  movies: Movie[];
  genres: Genre[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private _moviesServices: MoviesService) {
    this.id = this.navParams.get('id');
    this.title = this.navParams.get('name');

    this._moviesServices.getGenres().subscribe(res => {
      this.genres = res;
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GenrePage');
  }

  ngOnInit() {
    this._moviesServices.getMoviesByGenre(this.id.toString()).subscribe(res => {
      this.movies = res;
    });
  }
  openPage(genreObj: Genre) {
    this.navCtrl.push(GenrePage, {
      id: genreObj.id,
      name: genreObj.name
    });
  }
}

