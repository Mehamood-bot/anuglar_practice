import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ComponenetdeepdiveComponent} from '../app/app-components/componenetdeepdive.component'
import {DirectivedeepdiveComponent} from '../app/app-directives/directivedeepdive.component'
import {ServicesdeepdiveComponent} from '../app/app-services/servicesdeepdive.component'
import {RoutesdeepdiveComponent} from '../app/app-routes/routesdeepdive.component'
import {HomeComponent} from '../app/app-routes/home/home.component'
import {UsersComponent} from '../app/app-routes/users/users.component'
import {ServersComponent} from '../app/app-routes/servers/servers.component'
import { UserComponent } from './app-routes/users/user/user.component';
import { AuthGuard } from './app-routes/auth-guard.service';
import { ServerComponent } from './app-routes/servers/server/server.component';
import { EditServerComponent } from './app-routes/servers/edit-server/edit-server.component';
import { ServerResolver } from './app-routes/servers/server/server-resolver.service';
import { CanDeactivateGuard } from './app-routes/servers/edit-server/can-deactivate-guard.service';
import { PageNotFoundComponent } from './app-routes/page-not-found/page-not-found.component';
import { ErrorPageComponent } from './app-routes/error-page/error-page.component';
import { ObservablesdeepdiveComponent } from './app-observables/observablesdeepdive.component';
import { UserObsComponent } from './app-observables/user/user.component';
import { HomeObsComponent } from './app-observables/home/home.component';
import { FormsdeppdiveComponent } from './app-forms/formsdeppdive.component';
import { TemplatedrivenComponent } from './app-forms/templatedriven/templatedriven.component';
import { ReactiveComponent } from './app-forms/reactive/reactive.component';
import { PipedeepdiveComponent } from './app-pipe/pipedeepdive.component';

const routes: Routes = [
  // pathmatch :'full'
  {path:"", component: ComponenetdeepdiveComponent,pathMatch:'full'},
  {path:'component',component: ComponenetdeepdiveComponent},
  {path:'directives',component: DirectivedeepdiveComponent},
  {path:'services',component: ServicesdeepdiveComponent},

  // {path:'route/home', component: homeComponent}
  // can call child like this also
  // take url as route/users, but needs to <router-outlet> in 
  // RoutesdeepdiveComponent as angular child router in parent to display
  {path:'routes',component: RoutesdeepdiveComponent,
    children:[
      {path:"", redirectTo:"/routes/home",pathMatch:'full'},
      { path: 'home', component: HomeComponent },
       { path: 'users', component: UsersComponent,
       children: [
         { path: ':id/:name', component: UserComponent }
      ]
     },
      {
        path: 'servers',canActivate: [AuthGuard],canActivateChild: [AuthGuard],component: ServersComponent, 
        children: [
           { path: ':id', component: ServerComponent, resolve: {server: ServerResolver} },
           { path: ':id/edit', component: EditServerComponent, canDeactivate: [CanDeactivateGuard] }
         ] 
      },
    ]},
    
   {path : "observables", component : ObservablesdeepdiveComponent, children: [
    {path:"home", component:HomeObsComponent},
     {path:"user/:id", component : UserObsComponent}
   ]},
   
   {path:"forms", component:FormsdeppdiveComponent,children:[
     {path:"template",component:TemplatedrivenComponent},
     {path:"reactive",component:ReactiveComponent}
   ]},
   {path:"pipes",component:PipedeepdiveComponent},

    // { path: 'not-found', component: PageNotFoundComponent },
       // can send data through url by using data
   { path: 'not-found', component: ErrorPageComponent, data: {message: 'Page not found!'} },
    // must be at last route as we angular know all above route, and what ever routes given below are in valid
   { path: '**', redirectTo: '/not-found' }
    
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
