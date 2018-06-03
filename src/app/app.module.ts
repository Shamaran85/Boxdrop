// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

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

// Search


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
    SearchComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})

export class AppModule { }
