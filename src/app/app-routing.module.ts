import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessoiresNComponent } from './accessoires-n/accessoires-n.component';
import { ConsolesNComponent } from './consoles-n/consoles-n.component';
import { JeuxNComponent } from './jeux-n/jeux-n.component';
import { LoginComponent } from './login/login.component';
import { Login2Component } from './login2/login2.component';
import { CartComponent } from './cart/cart.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { RgpdComponent } from './rgpd/rgpd.component';

const routes: Routes = [{ path: 'accessoiresn/:id', component: AccessoiresNComponent },
                        { path: 'consolesn/:id', component: ConsolesNComponent },
                        { path: 'jeuxn/:id', component: JeuxNComponent },
                        { path: 'register', component: LoginComponent},
                        { path: 'login', component: Login2Component},
                        { path: 'cart', component: CartComponent},
                        { path: 'accessoireso/:id', component: AccessoiresNComponent},
                        { path: 'consoleso/:id', component: ConsolesNComponent},
                        { path: 'jeuxo/:id', component: JeuxNComponent},
                        { path: 'userprofile', component: UserProfileComponent},
                        { path: 'rgpd', component: RgpdComponent }
                        
                      ];

@NgModule({
  imports: [RouterModule.forRoot(routes, {initialNavigation: 'disabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
