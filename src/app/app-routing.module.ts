import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserRegistraionComponent } from './user/user-registraion/user-registraion.component';

const routes: Routes = [{ path: 'user-Registration', component: UserRegistraionComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
