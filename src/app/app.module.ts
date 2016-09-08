import { NgModule, Provider } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import {HTTP_PROVIDERS} from '@angular/http';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import ApplicationComponent from './application/application';
import HomeComponent from './pages/home/home';

import {ValuesService} from './common/services/values.service';
import {SERVICES} from './common/services/services';
import {AutoCompleteModule} from 'primeng/primeng';

@NgModule({
  imports: [
            FormsModule,
            ReactiveFormsModule,
    BrowserModule,
    HttpModule,
            RouterModule.forRoot([
              {path: '', component: HomeComponent}
            ]),
   AutoCompleteModule
  ],
  declarations: [
    ApplicationComponent,
    HomeComponent
  ],
  providers: [
    ValuesService,
    SERVICES,
    HTTP_PROVIDERS
  ],
  bootstrap: [ ApplicationComponent ]
})

export class AppModule { }
