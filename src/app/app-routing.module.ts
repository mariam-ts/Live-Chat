import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatPageComponent } from './features/chat-page/chat-page.component';
import { LoginPageComponent } from './features/login-page/login-page.component';
import { GuardService } from './features/shared/services/guard/guard.service';

const routes: Routes = [
  { path: '', component: LoginPageComponent },
  { path: 'loggedin', component: ChatPageComponent, canActivate: [GuardService]  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
