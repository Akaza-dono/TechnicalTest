import { Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { SellsComponent } from './Components/sells/sells.component';
import { UptsellComponent } from './Components/uptsell/uptsell.component';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' }, 
    { path: 'login', component: LoginComponent },
    { path: 'sells', component: SellsComponent },
    { path: 'uptsell/:id', component: UptsellComponent }

];