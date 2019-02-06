import {Component, OnInit} from '@angular/core';
import {Movie} from "../../model/classes";
import {MoviesService} from "../../services/movies.service";

/**
 * Generated class for the MoviesComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'movies',
  templateUrl: 'movies.html'
})
export class MoviesComponent implements OnInit {

  popularList: Movie[];
  theatersList: Movie[];
  topRatedList: Movie[];
  searchRes: Movie[];
  searchStr: string;

  constructor(private _moviesService: MoviesService) {
    this._moviesService.getPopular().subscribe(res => {
      this.popularList = res;
      console.log(this.popularList);
    });
    this._moviesService.getInTheaters().subscribe(res => {
      this.theatersList = res;
      console.log(this.theatersList);
    });
    this._moviesService.getTopRatedMovies().subscribe(res => {
      this.topRatedList = res;
      console.log(this.topRatedList);
    });
  }

  ngOnInit() {
  }

  searchMovies() {
    this._moviesService.searchMovies(this.searchStr).subscribe(res => {
      this.searchRes = res;
      console.log(this.searchRes);
    });
  }

}

