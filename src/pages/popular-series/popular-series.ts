import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import { Serie} from "../../model/classes";
import {MoviesService} from "../../services/movies.service";
import {SeriePage} from "../serie/serie";

/**
 * Generated class for the PopularSeriesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-popular-series',
  templateUrl: 'popular-series.html',
})
export class PopularSeriesPage {

  series: Serie[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private  _moviesService: MoviesService) {
    this._moviesService.getPopularSeries().subscribe(res => {
      this.series = res;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PopularSeriesPage');
  }

  public openPage(serieobj: Serie): void {
    this.navCtrl.push(SeriePage, {id: serieobj.id});
  }
}
