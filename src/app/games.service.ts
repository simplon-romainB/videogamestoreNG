import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(private http: HttpClient) { }

  getGames(page: number, marque: string) {
    return this.http.get("https://api.rawg.io/api/games?page="+ page +"&page_size=10&parent_platforms="+marque+"&key=e4ac5a1e8b2c4d3fbcd8f383d441321b")
  }

  searchGames(search: string,page: number, platform: string) {
    return this.http.get("https://api.rawg.io/api/games?page="+ page +"&page_size=10&search="+search+"&parent_platforms=" +platform +"&key=e4ac5a1e8b2c4d3fbcd8f383d441321b")
  }
  getDetails(name: string) {
    return this.http.get("https://api.rawg.io/api/games/"+name+"?page=1&page_size=10&key=e4ac5a1e8b2c4d3fbcd8f383d441321b")
  }
  

}
