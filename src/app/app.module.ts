import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FirstComponent } from './composants/first/first.component';
import { SecondComponent } from './composants/second.component';
import { ThirdComponent } from './composants/third/third.component';
import {FormsModule} from '@angular/forms';
import { CardComponent } from './composants/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    ThirdComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
