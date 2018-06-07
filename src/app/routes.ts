import { Component } from '@angular/core'; // ??
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Dropbox } from 'dropbox';
import { MainComponent } from './main/main.component';

export const appRoutes: Routes = [
    
    { path : '', redirectTo:'/login', pathMatch : 'full'},
    { path: '**', component: MainComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule],
    providers: []
})

export class AppRoutingModule {
}
