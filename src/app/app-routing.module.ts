import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'admin', loadChildren: () => import('./amin/amin.module')
      .then(mod => mod.AminModule)
  },
  {
    path: 'user', loadChildren: () => import('./user/user.module')
      .then(mod => mod.UserModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
