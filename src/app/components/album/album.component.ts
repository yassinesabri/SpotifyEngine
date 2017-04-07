/**
 * Created by sabri on 4/7/2017.
 */
import { Component , OnInit } from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';
import {ActivatedRoute} from '@angular/router';
import {Album} from '../../Album';
@Component({
  moduleId: module.id,
  selector: 'album',
  templateUrl: 'album.component.html',
  providers:[SpotifyService]
})
export class AlbumComponent implements OnInit{
  id:number;
  album : Album[];
  constructor(private spotifyService:SpotifyService,
              private route:ActivatedRoute){

  }
  ngOnInit(){
    this.route.params.map(params => params['id'])
      .subscribe((id) => {
        this.spotifyService.getAlbum(id)
          .subscribe(album => {
            this.album = album;
          });
      });
  }
}
