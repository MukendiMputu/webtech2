import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import { TaskListComponent } from './task-list/task-list.component';
import { FavoriteDirective } from './favorite.directive';

@NgModule({
  // To make other component, directives and pipes available 
  // to this module that don't come from other module
  declarations: [
    AppComponent,
    TaskComponent,
    TaskListComponent,
    FavoriteDirective
  ],

  // to bring in other angular modules that the App will need
  imports: [
    BrowserModule,
    AppRoutingModule
  ],

  providers: [],

  // entry point of the application
  bootstrap: [AppComponent]
})
export class AppModule { }
