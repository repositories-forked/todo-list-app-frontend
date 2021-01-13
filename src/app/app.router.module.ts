import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WelcomeComponent} from './view/welcome/welcome.component';
import {WelcomeGuard} from './guard/welcome.guard';
import {SignUpComponent} from './view/sign-up/sign-up.component';
import {SignInComponent} from './view/sign-in/sign-in.component';
import {MainComponent} from './view/main/main.component';
import {MainGuard} from './guard/main.guard';
import {NotFoundComponent} from './view/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/welcome'
  },
  {
    component: WelcomeComponent,
    path: 'welcome',
    canActivate: [WelcomeGuard]
  },
  {
    component: SignUpComponent,
    path: 'sign-up'
  },
  {
    component: SignInComponent,
    path: 'sign-in'
  },
  {
    component: MainComponent,
    path: 'main',
    canActivate: [MainGuard]
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRouterModule { }
