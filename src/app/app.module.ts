import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { CompaniesComponent } from './companies/companies.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UserComponent } from './user/user.component';
import { UserGuard } from './user.guard';
import { SomeComponent } from './some/some.component';

const routes: Route[] = [  
  {
    path: "",
    redirectTo: "users",
    pathMatch: "full"
  },
  {
    path: 'users',
    component: UsersComponent, children: [
      {
        path: ':id', 
        component: UserComponent, 
        canActivate: [UserGuard]
      }
    ]
  },
  {
    path: 'my-lazy', loadChildren: './my-lazy/my-lazy.module#MyLazyModule'
  },
  
  {
    path: 'companies',
    component: CompaniesComponent
  },
  {
    path: "**",
    component: NotFoundComponent
  },
];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    CompaniesComponent,
    NotFoundComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
