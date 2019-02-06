import {Component, OnInit} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {MoviesService} from "../../services/movies.service";
import {Actor, Movie, Review} from "../../model/classes";
import {DomSanitizer} from "@angular/platform-browser";
import {ActorPage} from "../actor/actor";

/**
 * Generated class for the MoviePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-movie',
  templateUrl: 'movie.html',
})
export class MoviePage implements OnInit {

  movie: Movie;
  reviews: Review[];
  similarMovies: Movie[];
  cast: Actor[];
  video: Object;
  id: number;

  constructor(private _moviesServices: MoviesService, public navCtrl: NavController, public navParams: NavParams, private sanitizer: DomSanitizer) {
    this.id = this.navParams.get('id');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MoviePage');
  }

  ngOnInit() {
    this._moviesServices.getMovie(this.id.toString()).subscribe(movie => {
      this.movie = movie;
    });
    this._moviesServices.getMovieReviews(this.id.toString()).subscribe(res => {
      this.reviews = res;
    });
    this._moviesServices.getMovieCredits(this.id.toString()).subscribe(res => {
      res.cast = res.filter((item) => {
        return item.profile_path
      });
      this.cast = res.slice(0, 4);
    });
    this._moviesServices.getMovieVideos(this.id.toString()).subscribe(res => {
      if (res && res.length) {
        this.video = res[0];
        this.video['url'] = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + this.video['key']);
      }
    });
    this._moviesServices.getSimilarMovies(this.id.toString()).subscribe(res => {
      this.similarMovies = res.slice(0, 12);
    });
  }

  public openPage(actorobj: Actor): void {
    console.log(actorobj);
    console.log('test this nigga ');
    this.navCtrl.push(ActorPage, {id: actorobj.id});
  }
}
