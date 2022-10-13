import { Component } from '@angular/core';
import { GamesService } from './games.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent {
  constructor(private gamesService: GamesService) { }
  public display: number = 0;
  unlockMenu(el: number) {
    this.display = el
    
  }
}
