import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule,JsonpModule  } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { MaterialModule } from '@angular/material';
import { AppComponent } from './app.component';
import { InputComponent } from './input/input.component';
import { AnalyzeComponent } from './analyze/analyze.component';
import { UsersComponent } from './users/users.component';
import { SettingsComponent } from './settings/settings.component';
import { EquipmentComponent } from './equipment/equipment.component';
import { ScreenshotService } from "app/screenshot.service";
import { IScreenshotService } from "app/iscreenshot-service";
import { EquipmentService } from "app/equipment/equipment.service";


const appRoutes: Routes = [
  { path: 'input', component: InputComponent },
  { path: 'analyze', component: AnalyzeComponent },
  { path: 'equipment', component: EquipmentComponent },
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
    SettingsComponent,
    EquipmentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    JsonpModule,
    RouterModule.forRoot(appRoutes),
    MaterialModule.forRoot()
  ],
  providers: [
    {provide: IScreenshotService, useClass: ScreenshotService },
    EquipmentService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
