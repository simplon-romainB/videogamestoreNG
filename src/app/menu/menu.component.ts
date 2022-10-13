import { Component, OnInit, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent implements OnInit {
  @Input() display: number = 0

  constructor() { }

  public menuNeuf = [{marque: 'Nintendo'},{marque: 'Xbox'}, {marque: 'Sony'}]
  public menuOccase = [{categorie: 'Consoles'}, {categorie: 'Jeux'}, {categorie: 'Accessoires'}]
  

  ngOnInit(): void {
  }

}
