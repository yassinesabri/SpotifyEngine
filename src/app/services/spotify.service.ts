/**
 * Created by sabri on 4/7/2017.
 */
import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {
  searchUrl: string ;
  constructor(private http : Http ){
    console.log('service ready...');
  }
  searchMusic(query:string,type='artist'){
    this.searchUrl='https://api.spotify.com/v1/search?query='+query+'&offset=0&limit=20&type='+type+'&market=US';
    return this.http.get(this.searchUrl)
      .map(res=>res.json());
  }

}