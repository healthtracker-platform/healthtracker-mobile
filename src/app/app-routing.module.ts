
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./shared/components/login.component";

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'app/login'},
  {
    path: 'patient',
    loadChildren: () => import('./patient/patient.module').then(m => m.TabsPageModule)
  },
  {
    path: 'app/login',
    component: LoginComponent,
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
