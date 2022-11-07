import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../cart.service';
import { ConsolesN } from '../consoles-n.model';
import { GamesService } from '../games.service';
import { Items } from '../items.model';

@Component({
  selector: 'app-consoles-n',
  templateUrl: './consoles-n.component.html',
  styleUrls: ['../app.component.sass']
})
export class ConsolesNComponent implements OnInit {

  

  ngOnInit(): void {
  }
  public image: string
  public hover: Boolean
  public toggle: Boolean
  public id: any
  public description: string
  public renderConsoles: ConsolesN[]
  public prix: number;
  public title: string;
  public consolesList = ['','','']
  public consolesN: ConsolesN[] = []
  public renderConsoleList: any[] = []
  
  

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private cartService: CartService, private item: Items, public gamesService: GamesService) {

    this.activatedRoute.url.subscribe((el)=>{
      this.id = el.toString()
      if (this.id === "consolesn,Nintendo" ) {
      this.renderConsoles = this.consolesN.filter((el) => el.marque ==="Nintendo")
      this.consolesList = ['switch', 'none', 'none']
      this.gamesService.getConsoles('nintendo').subscribe((val)=>{
        this.buildRenderConsoles(val)
      })
      }
      else if (this.id === "consolesn,Sony") {
      this.renderConsoles = this.consolesN.filter((el) => el.marque ==="Sony")
      this.consolesList = ['ps3', 'ps4', 'ps5']
      this.gamesService.getConsoles('sony').subscribe((val)=>{
        this.buildRenderConsoles(val)
      })
      }
      else if (this.id === "consolesn,Xbox") {
      this.renderConsoles = this.consolesN.filter((el) => el.marque ==="Xbox")
      this.consolesList = ['xbox360', 'xboxone', 'series']
      this.gamesService.getConsoles('xbox').subscribe((val)=>{
        this.buildRenderConsoles(val)
      })
      }
      if (this.id === "consoleso," + this.consolesN[4].marque ) {
        this.renderConsoles = this.consolesN.filter((el) => el.marque ==="Nintendo")
        
        }
        else if (this.id === "consoleso," + this.consolesN[0].marque) {
        this.renderConsoles = this.consolesN.filter((el) => el.marque ==="Sony")
        
        }
        else if (this.id === "consoleso," + this.consolesN[2].marque) {
        this.renderConsoles = this.consolesN.filter((el) => el.marque ==="Xbox")
        
        }
    })}
    

    popUp(image: string, description: string, prix: number, title: string) {
      this.image = image
      this.description = description
      this.prix = prix
      this.title = title
      this.toggle ? this.toggle = false: this.toggle = true
    }
    add() {
      this.cartService.itemsNumber ++
      this.item = {designation: this.title, price: this.prix, quantity: 1, image: this.image }
      this.cartService.items.push(this.item)
    }
    buildRenderConsoles(val: any) {
      this.renderConsoleList = []
              for (var i = 0; i<10; i++) {
                if(val[i] !== undefined)
                this.renderConsoleList.push(val[i])
                
                
              }
            }
}
