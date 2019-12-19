import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import 'froala-editor/js/plugins.pkgd.min.js';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { TextEditorComponent } from './shared/text-editor/text-editor.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from './shared/shared.module';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '*', redirectTo: 'home' },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot(),
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
