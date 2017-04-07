/**
 * Created by sabri on 4/7/2017.
 */
import { Component, OnInit } from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';
import {Artist} from '../../Artist';
import {Album} from '../../Album';
import {ActivatedRoute} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'artist',
  templateUrl: 'artist.component.html',
  providers:[SpotifyService]
})
export class ArtistComponent implements OnInit{
  id:number;
  artist : Artist[];
  albums : Album[];
  constructor(private spotifyService:SpotifyService,
    private route:ActivatedRoute
  ){

  }
  ngOnInit(){
    this.route.params.map(params => params['id'])
      .subscribe((id) => {
        this.spotifyService.getArtist(id)
          .subscribe(artist => {
            this.artist = artist;
          });
      });
  }
}
