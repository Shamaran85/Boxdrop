// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

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

// Breadcrumbs
// Upload
// Login
// Search


@NgModule({
  declarations: [
    AppComponent,
    DatalistComponent,
    MainComponent,
    BackComponent,
    LogoutComponent,
    LoginComponent,
    UploadComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})

export class AppModule { }
