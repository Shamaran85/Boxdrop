// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

// Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';

// Services & Routes
import { DataService } from './data.service';
import { appRoutes } from './routes';

// Components
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { BackComponent } from './back/back.component';
import { LogoutComponent } from './logout/logout.component';
import { DatalistComponent } from './datalist/datalist.component';
import { LoginComponent } from './login/login.component';
import { UploadComponent } from './upload/upload.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { SearchComponent } from './search/search.component';
import { LoginAuthComponent } from './login-auth/login-auth.component';


@NgModule({
  declarations: [
    AppComponent,
    DatalistComponent,
    MainComponent,
    BackComponent,
    LogoutComponent,
    LoginComponent,
    UploadComponent,
    BreadcrumbsComponent,
    SearchComponent,
    LoginAuthComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireDatabaseModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})

export class AppModule { }
