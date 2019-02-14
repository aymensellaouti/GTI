import {Route, RouterModule, Routes} from '@angular/router';
import {CvComponent} from './cvTech/cv/cv.component';
import {CouleursComponent} from './directives/couleurs/couleurs.component';
import {TodosComponent} from './todos/todos.component';


const APP_ROUTING: Routes = [
  {path: '', component: CvComponent },
  {path: 'todo', component: TodosComponent },
  {path: 'couleur/:color', component: CouleursComponent }
];

export const Routing = RouterModule.forRoot(APP_ROUTING);
