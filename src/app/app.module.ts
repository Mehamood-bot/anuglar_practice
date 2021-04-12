import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';

//modules wise app-component
import { ComponenetdeepdiveComponent } from './app-components/componenetdeepdive.component';
import { DirectivedeepdiveComponent } from './app-directives/directivedeepdive.component';
import { ServicesdeepdiveComponent } from './app-services/servicesdeepdive.component'
import { RoutesdeepdiveComponent } from './app-routes/routesdeepdive.component';
import { ObservablesdeepdiveComponent } from './app-observables/observablesdeepdive.component';
import { PipedeepdiveComponent } from './app-pipe/pipedeepdive.component';

//component Deep Dive
import { CockpitComponent } from './app-components/cockpit/cockpit.component';
import { ServerElementComponent } from './app-components/server-element/server-element.component';
import { FormsdeppdiveComponent } from './app-forms/formsdeppdive.component';

//custom directive
import { DirectiveexamplesComponent } from './app-directives/directiveexamples/directiveexamples.component';
import { BasicHighlightDirective } from './app-directives/basic-highlight/basic-highlight.directive';
import { BetterHighlightDirective } from './app-directives/better-highlight/better-highlight.directive';
import { UnlessDirective } from './app-directives/unless.directive';

//service
import { AccountComponent } from './app-services/account/account.component';
import { NewAccountComponent } from './app-services/new-account/new-account.component';
import { AccountsService } from './app-services/accounts.service';
import { LoggingService } from './app-services/logging.service';

//routes

import { PageNotFoundComponent } from './app-routes/page-not-found/page-not-found.component';
import { HomeComponent } from './app-routes/home/home.component';
import { UsersComponent } from './app-routes/users/users.component';
import { ServersComponent } from './app-routes/servers/servers.component';
import { UserComponent } from './app-routes/users/user/user.component';
import { EditServerComponent } from './app-routes/servers/edit-server/edit-server.component';
import { ServerComponent } from './app-routes/servers/server/server.component';
import { ServersService } from './app-routes/servers/servers.service';
import { AuthService } from './app-routes//auth.service';
import { AuthGuard } from './app-routes/auth-guard.service';
import { CanDeactivateGuard } from './app-routes/servers/edit-server/can-deactivate-guard.service';
import { ErrorPageComponent } from './app-routes/error-page/error-page.component';
import { ServerResolver } from './app-routes/servers/server/server-resolver.service';

//Observables
import {HomeObsComponent} from "./app-observables/home/home.component"
import {UserObsComponent} from "./app-observables/user/user.component";

//forms
import { TemplatedrivenComponent } from './app-forms/templatedriven/templatedriven.component';
import { ReactiveComponent } from './app-forms/reactive/reactive.component';


//pipes
import { ShortenPipe } from './app-pipe/shorten.pipe';
import { FilterPipe } from './app-pipe/filter.pipe';



@NgModule({
  declarations: [
    AppComponent,
    CockpitComponent,
    ServerElementComponent,
    //directivess
    DirectiveexamplesComponent, 
    BasicHighlightDirective,
    BetterHighlightDirective,
    UnlessDirective,
    //services
    AccountComponent,
    NewAccountComponent,
    ComponenetdeepdiveComponent,
    DirectivedeepdiveComponent,
    ServicesdeepdiveComponent,
    RoutesdeepdiveComponent,
    HomeComponent,
    UsersComponent,
    ServersComponent,
    UserComponent,
    EditServerComponent,
    ServerComponent,
    PageNotFoundComponent,
    ErrorPageComponent,
    ObservablesdeepdiveComponent,
    HomeObsComponent,
    UserObsComponent,
    FormsdeppdiveComponent,
    TemplatedrivenComponent,
    ReactiveComponent,
    PipedeepdiveComponent,
    ShortenPipe,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  
  providers: [
    AccountsService,
    LoggingService,
    ServersService, 
    AuthService, 
    AuthGuard,
    CanDeactivateGuard,
    ServerResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
