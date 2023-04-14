import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { firstComponent } from './first/first.component';
// import { SecondComponent } from './second/second.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SecondComponent } from './second/second.component';
import { FirstComponent } from './first/first.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SecondComponent,
    FirstComponent,
   
    // firstComponent,
    // SecondComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
