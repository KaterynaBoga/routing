import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { SomeComponent } from '../some/some.component';

const routes: Route[] = [
  {
    path: '',
    component: SomeComponent
  }
]


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SomeComponent]
})
export class MyLazyModule { }
