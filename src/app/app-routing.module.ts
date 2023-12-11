import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'admin', loadChildren: () => import('./amin/amin.module')
      .then(mod => mod.AminModule)
  },
  {
    path: 'admin', loadChildren: () => import('./amin/amin.module')
      .then(mod => mod.AminModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
