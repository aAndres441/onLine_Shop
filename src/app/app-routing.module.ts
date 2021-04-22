import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'error', component: ErrorComponent},

  {path: '', redirectTo: 'home' , pathMatch: 'full'},  // determinada para cuando se carga la app
  {path: '**', redirectTo: 'error' , pathMatch: 'full'},  // comodin determinada por si n o coincide ninguna direccion y siempre al final,+

];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {useHash:true,
      scrollPositionRestoration:'enabled'})],
  
  exports: [RouterModule]
})
export class AppRoutingModule { }
