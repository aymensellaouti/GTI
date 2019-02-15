import {Route, RouterModule, Routes} from '@angular/router';
import {CvComponent} from './cvTech/cv/cv.component';
import {CouleursComponent} from './directives/couleurs/couleurs.component';
import {TodosComponent} from './todos/todos.component';
import {AddPersonneComponent} from './cvTech/add-personne/add-personne.component';
import {LoginComponent} from './login/login.component';
import {Erreur404Component} from './erreur404/erreur404.component';
import {CvDetailComponent} from './cvTech/cv-detail/cv-detail.component';
import {DetailCvComponent} from './cvTech/detail-cv/detail-cv.component';


const APP_ROUTING: Routes = [
  {path: '', component: CvComponent },
  {path: 'todo', component: TodosComponent },
  {path: 'couleur/:color', component: CouleursComponent },
  {path: 'cv/add', component: AddPersonneComponent },
  {path: 'cv/:id', component: DetailCvComponent },
  {path: 'login', component: LoginComponent },
  {path: '**', component: Erreur404Component}
];

export const Routing = RouterModule.forRoot(APP_ROUTING);
