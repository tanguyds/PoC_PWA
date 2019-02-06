import { NgModule } from '@angular/core';
import { MoviesComponent } from './movies/movies';
import { MovieCardComponent } from './movie-card/movie-card';
import {BrowserModule} from "@angular/platform-browser";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {IonicModule} from "ionic-angular";
@NgModule({
	declarations: [
    MoviesComponent,
    MovieCardComponent,
  ],
	imports: [BrowserModule,
    CommonModule,
    FormsModule,
    IonicModule],
	exports: [
    MoviesComponent,
    MovieCardComponent,
  ]
})
export class ComponentsModule {}
