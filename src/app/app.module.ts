import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';

import { Routes } from './app.routes';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { MenuComponent } from './menu/menu.component';
import { SignupComponent } from './signup/signup.component';
import { UserprofileComponent } from './userprofile/userprofile.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    MenuComponent,
    SignupComponent,
    UserprofileComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(Routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
