import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FirstComponent } from './composants/first/first.component';
import { SecondComponent } from './composants/second.component';
import { ThirdComponent } from './composants/third/third.component';
import {FormsModule} from '@angular/forms';
import { CardComponent } from './composants/card/card.component';
import { CvComponent } from './cvTech/cv/cv.component';
import { ListeComponent } from './cvTech/liste/liste.component';
import { DetailComponent } from './cvTech/detail/detail.component';
import { ItemComponent } from './cvTech/item/item.component';
import { CouleursComponent } from './directives/couleurs/couleurs.component';
import { LampeComponent } from './directives/lampe/lampe.component';
import { HighlightDirective } from './directives/highlight.directive';
import { RainbowDirective } from './directives/rainbow.directive';
import {PremierService} from './service/premier.service';
import { TodosComponent } from './todos/todos.component';
import { EmbaucheComponent } from './cvTech/embauche/embauche.component';
import { DefaultImagePipe } from './default-image.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    ThirdComponent,
    CardComponent,
    CvComponent,
    ListeComponent,
    DetailComponent,
    ItemComponent,
    CouleursComponent,
    LampeComponent,
    HighlightDirective,
    RainbowDirective,
    TodosComponent,
    EmbaucheComponent,
    DefaultImagePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
