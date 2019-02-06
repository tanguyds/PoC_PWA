import {Component, Input} from '@angular/core';
import {Movie} from "../../model/classes";
import {NavController} from "ionic-angular";
import {MoviePage} from "../../pages/movie/movie";

/**
 * Generated class for the MovieCardComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'movie-card',
  templateUrl: 'movie-card.html'
})
export class MovieCardComponent {
  @Input()
  movie: Movie;

  constructor(public navCtrl: NavController) {

  }

  openPage(movieobj: Movie) {
    console.log(movieobj);
    this.navCtrl.push(MoviePage, {
      id: movieobj.id,
    });
  }

}
