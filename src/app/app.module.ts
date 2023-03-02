import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistroModule } from './registro/registro.module';
import { ListadoModule } from './listado/listado.module';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { ListadoComponent } from './listado/listado.component';
import { RegistroComponent } from './registro/registro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrimengModule } from './primeng/primeng.module';

@NgModule({
  declarations: [
    AppComponent,
    SidemenuComponent,
    ListadoComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ListadoModule,
    RegistroModule,
    FormsModule,
    ReactiveFormsModule,
    PrimengModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
