import { Routes } from '@angular/router';
import { RegisterComponent } from '../components/register/register.component';
import { HomeComponent } from '../components/home/home.component';
import { AppComponent } from '../app.component';
import { RegisterFlowGuard, HomeFlowGuard} from '../guards/flow.guard';

/*
All Routesare define here
*/
export const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      { path: '', redirectTo: 'register', pathMatch: 'full' },
      {
        path: 'register',
        component: RegisterComponent,
        data: {title: 'Signup page'},
        canActivate: [RegisterFlowGuard],
      }
    ]
  },
  {
    path: 'home',
    component: HomeComponent,
    data: {title: 'Success page'},
    canActivate: [HomeFlowGuard],
  }
];
