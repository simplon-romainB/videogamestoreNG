
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccessoiresN } from '../accessoires-n.model';
import { CartService } from '../cart.service';
import { Items } from '../items.model';


@Component({
  selector: 'app-accessoires-n',
  templateUrl: './accessoires-n.component.html',
  styleUrls: ['../app.component.sass']
})
export class AccessoiresNComponent  {
  public image: string
  public hover: Boolean
  public toggle: Boolean
  public id: any
  public description: string
  public renderAccessoires: AccessoiresN[]
  public prix: number;
  public title: string;
  public accessoiresN: AccessoiresN[] = [
    {title: "Pad ps4",marque: "Sony", console:"ps4", type: "pad", prix: 60, description: "La manette sans fil pour P-S4 / P-S4 Slim / P-S4 Pro. Haute performance, la conception est vraiment ergonomique, en particulier les sticks analogiques sont réactifs et fluides, qui ne sont presque pas de décalage d’entrée et de dérive d'entrée. Notre manette est intégré à la fois avec un accéléromètre et un gyroscope, tous deux sentis très sensibles, ce qui a conduit à un gameplay plus précis et agréable. ", image:"../assets/padps4.jpg"},
    {title: "Pad ps5",marque: "Sony", console:"ps5", type: "pad", prix: 60, description: "Manette sans fil DualSense pour PS5, Pour une expérience de gaming plus intense et innovante, Compatible avec PC via une connexion filaire en USB ", image:"../assets/padps5.webp"},
    {title: "Pad Xbox360",marque: "Xbox", console:"xbox360", type: "pad", prix: 30, description: "Prêt pour des heures de jeu réels: vous apprécierez de jouer sur Xbox 360 ou ordinateur avec notre manette de jeu spécialement conçue pour améliorer votre expérience de jeu. Soyez prêt pour les sessions de jeu infinies. Remarque : ce contrôleur peut être utilisé directement sur les PC Windows 8 et Windows 10. Si votre PC est un système Windows 7 ou XP, contactez-nous et obtenez les pilotes appropriés", image:"../assets/pad360.jpg"},
    {title: "Pad XboxOne",marque: "Xbox", console:"xboxone/seriesX/S", type: "pad", prix: 70, description: "Nouvelle technologie sans fil 2.4G. La toute nouvelle fonction de connexion sans fil 2,4 GHz vous offre une portée sans fil de plus de 30 pieds, vous permettant de profiter de votre temps de jeu où vous le souhaitez. Le contrôleur est livré avec un récepteur USB.", image:"../assets/padxboxone.jpg"},
    {title: "Pad Switch",marque: "Nintendo", console:"switch", type: "pad", prix: 60, description: "Une manette ergonomique à la forme d'une manette traditionnelle.Confortable et idéale pour les longues sessions de jeu en mode téléviseur et en mode sur table", image:"../assets/padswitch.jpg"}
  ]
  
  

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private cartService: CartService, private item: Items) {

    this.activatedRoute.url.subscribe((el)=>{
      this.id = el.toString()
      if (this.id === "accessoiresn," + this.accessoiresN[4].marque ) {
      this.renderAccessoires = this.accessoiresN.filter((el) => el.marque ==="Nintendo")
      console.log(this.id)
      }
      else if (this.id === "accessoiresn," + this.accessoiresN[0].marque) {
      this.renderAccessoires = this.accessoiresN.filter((el) => el.marque ==="Sony")
      
      }
      else if (this.id === "accessoiresn," + this.accessoiresN[2].marque) {
      this.renderAccessoires = this.accessoiresN.filter((el) => el.marque ==="Xbox")
      
      }
      if (this.id === "accessoireso," + this.accessoiresN[4].marque ) {
        this.renderAccessoires = this.accessoiresN.filter((el) => el.marque ==="Nintendo")
        console.log(this.id)
        }
        else if (this.id === "accessoireso," + this.accessoiresN[0].marque) {
        this.renderAccessoires = this.accessoiresN.filter((el) => el.marque ==="Sony")
        
        }
        else if (this.id === "accessoireso," + this.accessoiresN[2].marque) {
        this.renderAccessoires = this.accessoiresN.filter((el) => el.marque ==="Xbox")
        
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
  }
  


     
     
    
    
  
 
  

  


