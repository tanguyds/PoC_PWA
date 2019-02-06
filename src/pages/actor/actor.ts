import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Actor} from "../../model/classes";
import {MoviesService} from "../../services/movies.service";

/**
 * Generated class for the ActorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-actor',
  templateUrl: 'actor.html',
})
export class ActorPage {

  person: Actor;
  movies: Actor[];
  id: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, private _moviesSerice: MoviesService) {
    this.id = this.navParams.get('id');
    this._moviesSerice.getPersonDetail(this.id.toString()).subscribe(person => {
      this.person = person;
    });
    this._moviesSerice.getPersonCast(this.id.toString()).subscribe(res => {
      this.movies = res;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ActorPage');
  }

}
