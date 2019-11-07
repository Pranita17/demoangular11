import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CareersComponent } from './careers/careers.component';
import { RouterModule } from '@angular/router';
import { ErrorPageComponent } from './error-page/error-page.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule ,RouterModule.forRoot([
    {path: '',component:HomeComponent},
    {path: 'about',component: AboutComponent},
    {path: 'careers',component: CareersComponent},
    {path: '**',component: ErrorPageComponent},
  ])],
  declarations: [ AppComponent, HelloComponent, HomeComponent, AboutComponent, CareersComponent, ErrorPageComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
