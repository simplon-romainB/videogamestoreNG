import { Component, OnInit } from '@angular/core';
import { GamesService } from '../games.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../cart.service';
import { Items } from '../items.model';

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
  public description: string;
  public page: number = 1
  public name: string
  public htmlDescription: string ;
  public prix = 60
  public consolesList: [string, string, string] = ['ps3', 'ps4', 'ps5']
  public platform1: string;
  public platform2: string;
  public platform3: string;
  public consolesListFixed: any;
  public nintendo: boolean;
  public sony: boolean;
  public xbox:boolean;
  public nintendoo: boolean;
  public xboxo: boolean;
  public sonyo: boolean

  constructor(private games: GamesService, private activatedRoute: ActivatedRoute, private cartService: CartService, private item: Items, private router: Router) { 
    
    
    
  }

  ngOnInit(): void {
    
  }
  
  goBack() {
    if (this.page === 1) {
      return
    }
    else if (this.searching !== undefined) {
      this.getSearchGames(this.page-1)
    }
    
    
    
  }
  goForward() {
    this.getSearchGames(this.page+1) 
  }
  popUp(image: string, name: string, description: string) {
    this.name = name
    this.image = image
    this.htmlDescription = description
    this.toggle ? this.toggle = false: this.toggle = true
  }
  popDown() {
    this.toggle = false
  }
  search(research: string, page: number, platform: [string, string, string]) {
    if (research === undefined) {
      this.searching = ''
    }
    else {
      this.searching = research
    }
    this.activatedRoute.url.subscribe((el)=>{
      if (el.toString() === "jeuxn," + this.constructeurs[0]) {
        this.consolesList = ["switch", "nonetheless", "nonetheless"]
        this.nintendo = true
        this.sony = false
        this.xbox = false
        this.sonyo = false
        this.xboxo = false
        this.nintendoo = false
        this.getSearchGames(page)
      }
      else if (el.toString() === "jeuxn," + this.constructeurs[1]) {
        this.consolesList = ['xbox360', 'xboxone', 'series']
        this.nintendo = false
        this.sony = false
        this.xbox = true
        this.sonyo = false
        this.xboxo = false
        this.nintendoo = false
        this.getSearchGames(page)
      }
      else if (el.toString() === "jeuxn," + this.constructeurs[2]) {
        this.consolesList = ["ps3", "ps4", "ps5"]
        this.nintendo = false
        this.sony = true
        this.xbox = false
        this.sonyo = false
        this.xboxo = false
        this.nintendoo = false
        this.getSearchGames(page)
      }
      if (el.toString() === "jeuxo," + this.constructeurs[0]) {
        this.consolesList = ["supernintendo", "gameboy", "nes"]
        this.nintendo = true
        this.sony = false
        this.xbox = false
        this.sonyo = false
        this.xboxo = false
        this.nintendoo = true
        this.getSearchGameso(page)
      }
      else if (el.toString() === "jeuxo," + this.constructeurs[1]) {
        this.consolesList = ['xbox360', 'xboxone', 'xbox']
        this.nintendo = false
        this.sony = false
        this.xbox = false
        this.sonyo = false
        this.xboxo = true
        this.nintendoo = false
        this.getSearchGameso(page)
      }
      else if (el.toString() === "jeuxo," + this.constructeurs[2]) {
        this.consolesList = ["ps", "ps2", "ps3"]
        this.nintendo = false
        this.sony = false
        this.xbox = false
        this.sonyo = true
        this.xboxo = false
        this.nintendoo = false
        this.getSearchGameso(page)
      }
      
    })
   }
   getSearchGameso(page: any) {
    this.searching === undefined? this.searching = '': this.searching = this.searching
    this.games.searchGamesO(this.searching, page,this.consolesList).subscribe((val: any) => {
      this.buildRenderGames(val)
          this.page = page
          console.log(this.consolesList)
  })
}
   getSearchGames(page: any) {
    this.searching === undefined? this.searching = '': this.searching = this.searching
    this.games.searchGames(this.searching, page,this.consolesList).subscribe((val: any) => {
      this.buildRenderGames(val)
          this.page = page
  })
   }
buildRenderGames(val: any) {
  this.renderGameList = []
          for (var i = 0; i<10; i++) {
            if(val[i] !== undefined)
            this.renderGameList.push(val[i])
            
            
          }
          
}
add() {
  this.cartService.itemsNumber ++
  this.item = {designation: this.name, price: this.prix, quantity: 1, image: this.image }
  this.cartService.items.push(this.item)
  this.router.navigateByUrl('/cart')
}

typeSearch(page: number) {
  this.games.searchGames(this.searching, page,this.consolesList).subscribe((val: any) => {
    this.buildRenderGames(val)
        this.page = page
  })
}

}
