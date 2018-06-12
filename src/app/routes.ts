
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { MainComponent } from './main/main.component';
import { LoginAuthComponent } from './login-auth/login-auth.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';

export const appRoutes: Routes = [

    { path: 'auth', component: LoginAuthComponent },
    { path: 'login', component: LoginComponent },
    { path: '**', component: MainComponent, canActivate: [AuthService] }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule],
    providers: []
})

export class AppRoutingModule {
}
