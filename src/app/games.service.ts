import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(private http: HttpClient) { }
  //fonctions de consommation de l'API
  

  searchGames(search: string,page: number, platform: [string, string, string]) {
    var plat = []
    for (var i = 0;i<3;i++) {
      platform[i] === ''?plat[i] = "nonetheless": plat[i] = platform[i]
    }
    return this.http.post("http://localhost:3000/searchGames?search=%" + search + "%&page=" + page, plat)
  }

  searchGamesO(search: string,page: number, platform: [string, string, string]) {
    var plat = []
    for (var i = 0;i<3;i++) {
      platform[i] === ''?plat[i] = "nonetheless": plat[i] = platform[i]
    }
    return this.http.post("http://localhost:3000/searchGamesO?search=%" + search + "%&page=" + page, plat)
  }
  getConsoles(marque: string) {
    return this.http.get("http://localhost:3000/consoles?marque=%" + marque + "%")
  }
}
