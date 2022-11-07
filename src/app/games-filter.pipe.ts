import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gamesFilter'
})
export class GamesFilterPipe implements PipeTransform {

  transform(renderGameList: any, consoleType: any): any {
    
    return renderGameList.filter((v: any)=> {
      return v.jeuplatforme.indexOf(consoleType) !== -1
    })
  }

}
