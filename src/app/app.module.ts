import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AssformComponent } from './assform/assform.component';
import { UsrlistComponent } from './usrlist/usrlist.component';
import { Route } from '@angular/compiler/src/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
const appRoutes:Routes=[
  {path:'assform',component:AssformComponent},
  {path:'usrlist',component:UsrlistComponent},


]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AssformComponent,
    UsrlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
