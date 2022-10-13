import { Component, OnInit } from '@angular/core';
import { GamesService } from '../games.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ConsolesO } from '../consoles-o.model';

@Component({
  selector: 'app-jeux-n',
  templateUrl: './jeux-n.component.html',
  styleUrls: ['../app.component.sass']
})
export class JeuxNComponent implements OnInit {
  public image: string;
  public toggle: boolean
  public id: any
  public gameList : string[] =[]
  public renderGameList: any[] = []
  public constructeurs = ["Nintendo","Xbox", "Sony"]
  public searching: string;
  public platform: string;
  public description: string
  private check: boolean = false
  private page: number = 1
  public name: string

  constructor(private games: GamesService, private activatedRoute: ActivatedRoute, private router: Router) { 
    this.rendergames(this.page)
    
  }

  ngOnInit(): void {
    
  }
  rendergames(page: number) {
    this.activatedRoute.url.subscribe((el)=>{
      this.id = el.toString()
      if (this.id === "jeuxn," + this.constructeurs[0] ) {
        this.games.getGames(1,"7").subscribe((val: any) => {
          this.buildRenderGames(val)
      })}
      
      else if (this.id === "jeuxn," + this.constructeurs[1]) {
        this.games.getGames(1,"3").subscribe((val: any) => {
         this.buildRenderGames(val)
      })}
      else if (this.id === "jeuxn," + this.constructeurs[2]) {
        this.games.getGames(1,"2").subscribe((val: any) => {
          this.buildRenderGames(val)

      })}
    })
    this.check === false
  }
  goBack() {
    if (this.page === 1) {
      return
    }
    else if (this.check === true) {
      this.search(this.searching, (this.page-1))
    }
    else if(this.check === false) {
      this.rendergames(this.page-1)
    }
    
  }
  goForward() {
    if (this.check === true) {
      this.search(this.searching, (this.page+1))
    }
    else if(this.check === false) {
      this.rendergames(this.page+1)
    }
  }
  popUp(image: string, name: string) {
    this.games.getDetails(name).subscribe((val: any) => {this.description = val.description_raw
    console.log(val)
    this.name = val.name
    this.image = image
    this.toggle ? this.toggle = false: this.toggle = true
  })}
  search(research: string, page: number) {
    this.activatedRoute.url.subscribe((el)=>{
      if (el.toString() === "jeuxn," + this.constructeurs[0]) {
        this.platform = "7"
      }
      else if (el.toString() === "jeuxn," + this.constructeurs[1]) {
        this.platform = "3"
      }
      else if (el.toString() === "jeuxn," + this.constructeurs[2]) {
        this.platform = "2"
      }
      this.games.searchGames(this.searching, page,this.platform).subscribe((val: any) => {
        this.buildRenderGames(val)
    
            this.check = true
            this.page = page
    })
    })
   }
buildRenderGames(val: any) {
  this.renderGameList = []
          for (var i = 0; i<10; i++) {
            if(val.results[i] !== undefined)
            this.renderGameList.push(val.results[i])
            
          }
          console.log(this.renderGameList)
}

}
