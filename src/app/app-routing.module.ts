import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: 'auth', 
    loadChildren: () => import('./Auth/auth.module').then( m=> m.AuthModule)
    },
    
    {
      path: 'dashboard', 
      loadChildren: () => import('./Protected/protected.module').then( m=> m.ProtectedModule)
      },
    
        {
          path: '**', 
          redirectTo:'auth'
          }
      


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
