import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Actor, Genre, Movie, Serie} from "../model/classes";

@Injectable()
export class MoviesService {

  headers = new HttpHeaders();

  constructor(private http: HttpClient) {
    this.headers.append('Content-Type', 'application/json');
    console.log('Movies service is ready');
  }

  getPopular(): Observable<Movie[]> {
    return this.http.get<Movie[]>('https://api.themoviedb.org/3/discover/movie'
      + '?api_key=fed69657ba4cc6e1078d2a6a95f51c8c&sort_by=popularity.desc').pipe(
      map(res => res['results'])
    );
  }

  getInTheaters(): Observable<Movie[]> {
    return this.http.get<Movie[]>('https://api.themoviedb.org/3/discover/movie?api_key=fed69657ba4cc6e1078d2a6a95f51c8c'
      + '&primary_release_date.gt=2017-10-20' +
      '&primary_release_date.lte=2017-12-20&sort_by=popularity.desc').pipe(
      map(res => res['results'])
    );
  }

  getTopRatedMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>('https://api.themoviedb.org/3/movie/top_rated?api_key=fed69657ba4cc6e1078d2a6a95f51c8c').pipe(
      map(res => res['results'])
    );
  }

  searchMovies(searchStr: string): Observable<Movie[]> {
    return this.http.get<Movie[]>('https://api.themoviedb.org/3/search/movie?api_key=fed69657ba4cc6e1078d2a6a95f51c8c&query='
      + searchStr + '&sort_by=popularity.desc').pipe(
      map(res => res['results'])
    );
  }

  getMovie(id: string): Observable<Movie> {
    return this.http.get<Movie>('https://api.themoviedb.org/3/movie/' + id + '?api_key=fed69657ba4cc6e1078d2a6a95f51c8c');
  }

  getGenres(): Observable<Genre[]> {
    return this.http.get<Genre[]>('https://api.themoviedb.org/3/genre/movie/list?api_key=fed69657ba4cc6e1078d2a6a95f51c8c'
      + '&language=en-US').pipe(
      map(res => res['genres'])
    );
  }

  getMoviesByGenre(id: string): Observable<Movie[]> {
    return this.http.get<Movie[]>('https://api.themoviedb.org/3/genre/' + id + '/movies?api_key=fed69657ba4cc6e1078d2a6a95f51c8c')
      .pipe(
        map(res => res['results'])
      );
  }

  getMovieReviews(id: string) {
    return this.http.get('https://api.themoviedb.org/3/movie/' + id + '/reviews?api_key=fed69657ba4cc6e1078d2a6a95f51c8c').pipe(
      map(res => res['results'])
    );
  }

  getMovieVideos(id: string) {
    return this.http.get('https://api.themoviedb.org/3/movie/' + id + '/videos?api_key=fed69657ba4cc6e1078d2a6a95f51c8c')
      .pipe(
        map(res => res['results'])
      );
  }

  getSimilarMovies(id: string) {
    return this.http.get('https://api.themoviedb.org/3/movie/' + id + '/similar?api_key=fed69657ba4cc6e1078d2a6a95f51c8c').pipe(
      map(res => res['results'])
    );
  }

  getMovieCredits(id: string) {
    return this.http.get('https://api.themoviedb.org/3/movie/' + id + '/credits?api_key=fed69657ba4cc6e1078d2a6a95f51c8c').pipe(
      map(res => res['cast'])
    );
  }

  getUpComingMovies() {
    return this.http.get('https://api.themoviedb.org/3/movie/upcoming?api_key=fed69657ba4cc6e1078d2a6a95f51c8c').pipe(
      map(res => res['results'])
    );
  }

  getPopularSeries() {
    return this.http.get('https://api.themoviedb.org/3/tv/popular?api_key=fed69657ba4cc6e1078d2a6a95f51c8c').pipe(
      map(res => res['results'])
    );
  }

  getTopRatedSeries() {
    return this.http.get('https://api.themoviedb.org/3/tv/top_rated?api_key=fed69657ba4cc6e1078d2a6a95f51c8c');
  }

  getSerieDetails(id: string) {
    return this.http.get<Serie>('https://api.themoviedb.org/3/tv/' + id + '?api_key=fed69657ba4cc6e1078d2a6a95f51c8c');
  }

  getSerieVideos(id: string) {
    return this.http.get('https://api.themoviedb.org/3/tv/' + id + '/videos?api_key=fed69657ba4cc6e1078d2a6a95f51c8c').pipe(
      map(res => res['results'])
    );
  }


  getPersonDetail(id: string) {
    return this.http.get<Actor>('https://api.themoviedb.org/3/person/' + id + '?api_key=fed69657ba4cc6e1078d2a6a95f51c8c');
  }

  getPersonCast(id: string) {
    return this.http.get('https://api.themoviedb.org/3/person/' + id + '/movie_credits?api_key=fed69657ba4cc6e1078d2a6a95f51c8c').pipe(
      map(res => res['cast'])
    );
  }
}
