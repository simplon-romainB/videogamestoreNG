import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet'; 
import {HttpClientModule} from '@angular/common/http'
import {MatIconModule} from '@angular/material/icon'; 
import {MatInputModule} from '@angular/material/input'; 
import { MatSelectCountryModule } from "@angular-material-extensions/select-country";
import { ReactiveFormsModule, FormsModule,FormGroup,FormControl,Validators,FormBuilder } from '@angular/forms';
import { MatButtonToggleModule } from '@angular/material/button-toggle'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { ConsolesNComponent } from './consoles-n/consoles-n.component';
import { JeuxNComponent } from './jeux-n/jeux-n.component';
import { AccessoiresNComponent } from './accessoires-n/accessoires-n.component';
import {MatCardModule} from '@angular/material/card';
import { LoginComponent } from './login/login.component';
import { Login2Component } from './login2/login2.component';
import { CartComponent } from './cart/cart.component'; 
import { Items } from './items.model';
import { CookieService } from 'ngx-cookie-service';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { GamesFilterPipe } from './games-filter.pipe';
import { FooterComponent } from './footer/footer.component';
import { RgpdComponent } from './rgpd/rgpd.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ConsolesNComponent,
    JeuxNComponent,
    AccessoiresNComponent,
    LoginComponent,
    Login2Component,
    CartComponent,
    UserProfileComponent,
    GamesFilterPipe,
    FooterComponent,
    RgpdComponent,
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
    MatIconModule,
    MatInputModule,
    MatSelectCountryModule.forRoot('fr'), 
    ReactiveFormsModule,
    MatButtonToggleModule
    
  ],
  providers: [Items, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
