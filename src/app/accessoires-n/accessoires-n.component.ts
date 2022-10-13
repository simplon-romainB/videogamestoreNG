
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccessoiresN } from '../accessoires-n.model';


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
  public accessoiresN: AccessoiresN[] = [
    {marque: "Sony", console:"ps4", type: "pad", prix: 60, description: "pad officiel ps4", image:"../assets/padps4.jpg"},
    {marque: "Sony", console:"ps5", type: "pad", prix: 60, description: "pad officiel ps5", image:"../assets/padps5.webp"},
    {marque: "Xbox", console:"xbox360", type: "pad", prix: 30, description: "pad officiel xbox360", image:"../assets/pad360.jpg"},
    {marque: "Xbox", console:"xboxone/seriesX/S", type: "pad", prix: 70, description: "pad officiel xboxone/seriesX/S", image:"../assets/padxboxone.jpg"},
    {marque: "Nintendo", console:"switch", type: "pad", prix: 60, description: "pad officiel pro switch", image:"../assets/padswitch.jpg"}
  ]
  
  

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {

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
    })}

    popUp(image: string, description: string) {
      this.image = image
      this.description = description
      this.toggle ? this.toggle = false: this.toggle = true
    }
    
  }
  


     
     
    
    
  
 
  

  


