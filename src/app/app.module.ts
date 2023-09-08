import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListTachesComponent } from './list-taches/list-taches.component';
import { HeaderComponent } from './header/header.component';
import { BitcoinComponent } from './bitcoin/bitcoin.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListTachesComponent,
    HeaderComponent,
    BitcoinComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
