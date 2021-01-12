import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {TaskService} from './service/task.service';
import {TaskItemComponent} from './view/task-item/task-item.component';
import {MainComponent} from './view/main/main.component';
import {WelcomeComponent} from './view/welcome/welcome.component';
import {SignUpComponent} from './view/sign-up/sign-up.component';
import {SignInComponent} from './view/sign-in/sign-in.component';
import {RouterModule, Routes} from '@angular/router';
import { NotFoundComponent } from './view/not-found/not-found.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/welcome'
  },
  {
    component: WelcomeComponent,
    path: 'welcome'
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
    path: 'main'
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    TaskItemComponent,
    MainComponent,
    WelcomeComponent,
    SignUpComponent,
    SignInComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
