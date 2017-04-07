import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {AboutComponent} from './components/about/about.component';
import {SearchComponent} from './components/search/search.component';
import { RouterModule }   from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {ArtistComponent} from './components/artist/artist.component';
import {Artist} from 'Artist';
import {Album} from 'Album';
@NgModule({
  imports:      [ BrowserModule , FormsModule , HttpModule ,
    RouterModule.forRoot([
      {
        path: '',
        component: SearchComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'artist/:id',
        component: ArtistComponent
      }
    ])
  ],
  declarations: [ AppComponent , NavbarComponent , AboutComponent , SearchComponent , ArtistComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
