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
import { TodosComponent } from './todos/todos.component';
import { EmbaucheComponent } from './cvTech/embauche/embauche.component';
import { DefaultImagePipe } from './default-image.pipe';
import { HeaderComponent } from './header/header.component';
import {Routing} from './app.routing';
import { AddPersonneComponent } from './cvTech/add-personne/add-personne.component';
import { LoginComponent } from './login/login.component';
import { Erreur404Component } from './erreur404/erreur404.component';
import { ObserveComponent } from './http/observe/observe.component';
import {HttpClientModule} from '@angular/common/http';
import { DetailCvComponent } from './cvTech/detail-cv/detail-cv.component';
import { LiveSearchComponent } from './cvTech/live-search/live-search.component';
import { CvDetailComponent } from './cvTech/cv-detail/cv-detail.component';

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
    DefaultImagePipe,
    HeaderComponent,
    AddPersonneComponent,
    LoginComponent,
    Erreur404Component,
    ObserveComponent,
    DetailCvComponent,
    LiveSearchComponent,
    CvDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    Routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
