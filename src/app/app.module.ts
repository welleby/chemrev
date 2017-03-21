import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule,JsonpModule  } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { MaterialModule } from '@angular/material';
import { AppComponent } from './app.component';
import { InputComponent } from './input/input.component';
import { AnalyzeComponent } from './analyze/analyze.component';
import { UsersComponent } from './users/users.component';
import { SettingsComponent } from './settings/settings.component';

const appRoutes: Routes = [
  { path: 'input', component: InputComponent },
  { path: 'analyze', component: AnalyzeComponent },
  { path: 'users', component: UsersComponent },
  { path: 'settings', component: SettingsComponent },
  { path: '', redirectTo: '/input', pathMatch:"full" }
];

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    AnalyzeComponent,
    UsersComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    RouterModule.forRoot(appRoutes),
    MaterialModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
