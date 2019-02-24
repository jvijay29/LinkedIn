import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignnComponent } from './signn/signn.component';

const routes: Routes = [{path: 'vsign', component: SignnComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
