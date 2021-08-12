import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { RecordsComponent } from './records/records.component';

const routes: Routes = [
  {path:'',component:UserComponent},
  {path:'records',component:RecordsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
