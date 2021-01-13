import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {TaskService} from './service/task.service';
import {TaskItemComponent} from './view/task-item/task-item.component';
import {MainComponent} from './view/main/main.component';
import {WelcomeComponent} from './view/welcome/welcome.component';
import {SignUpComponent} from './view/sign-up/sign-up.component';
import {SignInComponent} from './view/sign-in/sign-in.component';
import { NotFoundComponent } from './view/not-found/not-found.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MainGuard} from './guard/main.guard';
import {WelcomeGuard} from './guard/welcome.guard';
import {AppRouterModule} from './app.router.module';
import {NgProgressModule} from 'ngx-progressbar';
import {NgProgressHttpModule} from 'ngx-progressbar/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {TaskEditorComponent} from './view/task-editor/task-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskItemComponent,
    MainComponent,
    WelcomeComponent,
    SignUpComponent,
    SignInComponent,
    NotFoundComponent,
    TaskEditorComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    FormsModule,
    HttpClientModule,
    NgProgressModule.withConfig({
      color: 'red'
    }),
    NgProgressHttpModule.withConfig({
      silentApis: ['http://localhost:8080/todoapp/api/v1/users']
    }),
    BrowserAnimationsModule,
    MatSnackBarModule
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
