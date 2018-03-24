import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GenericComponent } from './generic/generic.component';
import { IndexComponent } from './index/index.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';
import { ElemetsComponent } from './elemets/elemets.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component'
import {LoginService} from './login/login.service';
import { UserInsertComponent } from './user-insert/user-insert.component'
@NgModule({
  declarations: [
    AppComponent,
    GenericComponent,
    IndexComponent,
    ElemetsComponent,
    AdminComponent,
    LoginComponent,
    UserComponent,
    UserInsertComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,    
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path:'', component:IndexComponent },
      { path:'elements', component:ElemetsComponent },
      { path:'generic', component:GenericComponent },
      { path:'admin', component:AdminComponent },
      { path:'userInsert', component:UserInsertComponent },
      { path:'**', component:IndexComponent },
    ])
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
