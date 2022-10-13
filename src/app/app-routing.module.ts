import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessoiresNComponent } from './accessoires-n/accessoires-n.component';
import { ConsolesNComponent } from './consoles-n/consoles-n.component';
import { JeuxNComponent } from './jeux-n/jeux-n.component';
import { NintendoOComponent } from './nintendo-o/nintendo-o.component';
import { SegaOComponent } from './sega-o/sega-o.component';
import { SonyOComponent } from './sony-o/sony-o.component';
import { XboxOComponent } from './xbox-o/xbox-o.component';

const routes: Routes = [{ path: 'accessoiresn/:id', component: AccessoiresNComponent },
                        { path: 'consolesn/:id', component: ConsolesNComponent },
                        { path: 'jeuxn/:id', component: JeuxNComponent },
                        { path: 'nintendoo/:id', component: NintendoOComponent},
                        { path: 'segao/:id', component: SegaOComponent},
                        { path: 'sonyo/:id', component: SonyOComponent},
                        { path: 'xboxo/:id', component: XboxOComponent}
                        
                      ];

@NgModule({
  imports: [RouterModule.forRoot(routes, {initialNavigation: 'disabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
