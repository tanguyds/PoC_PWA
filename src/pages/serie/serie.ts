import {Component, OnInit} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Serie} from "../../model/classes";
import {MoviesService} from "../../services/movies.service";
import {DomSanitizer} from "@angular/platform-browser";

/**
 * Generated class for the SeriePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-serie',
  templateUrl: 'serie.html',
})
export class SeriePage implements OnInit {
  serie: Serie;
  video: Object;
  id: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, private _moviesServices: MoviesService, private sanitizer: DomSanitizer) {
    this.id = this.navParams.get('id');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SeriePage');
  }

  ngOnInit(): void {
    this._moviesServices.getSerieDetails(this.id.toString()).subscribe(serie => {
      console.log(serie);
      this.serie = serie;
      console.log(this.serie);
    });
    this._moviesServices.getSerieVideos(this.id.toString()).subscribe(res => {
      if (res && res.length) {
        this.video = res[0];
        this.video['url'] = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + this.video['key']);
        console.log(this.video);
      }
    });

  }

}
