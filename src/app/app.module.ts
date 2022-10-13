import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet'; 
import {HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { ConsolesNComponent } from './consoles-n/consoles-n.component';
import { JeuxNComponent } from './jeux-n/jeux-n.component';
import { AccessoiresNComponent } from './accessoires-n/accessoires-n.component';
import { NintendoOComponent } from './nintendo-o/nintendo-o.component';
import { SegaOComponent } from './sega-o/sega-o.component';
import { XboxOComponent } from './xbox-o/xbox-o.component';
import { SonyOComponent } from './sony-o/sony-o.component';
import {MatCardModule} from '@angular/material/card'; 

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ConsolesNComponent,
    JeuxNComponent,
    AccessoiresNComponent,
    NintendoOComponent,
    SegaOComponent,
    XboxOComponent,
    SonyOComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatBottomSheetModule,
    HttpClientModule,
    FormsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
