/**
 * Created by sabri on 4/7/2017.
 */
import { Component } from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';
import {Artist} from '../../Artist';

@Component({
  moduleId: module.id,
  selector: 'search',
  templateUrl: 'search.component.html',
  providers: [ SpotifyService ]
})
export class SearchComponent  {
  searchQuery:string;
  searchRes:Artist[];
  constructor(private potifyService: SpotifyService ){

  }
  searchMusic(){
    //console.log(this.searchQuery);
    this.potifyService.searchMusic(this.searchQuery).subscribe(res => {
      //console.log(res.artists.items);
      this.searchRes = res.artists.items;
    });
  }
}
