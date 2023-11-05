import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DogComponent } from 'src/app/dog/dog.component';

const routes: Routes = [
  { path: '', component: DogComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DogRoutingModule { }