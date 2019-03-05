import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MemberListComponent } from './member-list/member-list.component';
import { ListsComponent } from './lists/lists.component';
import { MessagesComponent } from './messages/messages.component';
import { AuthGuard } from './_guard/auth.guard';
import { MemberDetailedComponent } from './member-detailed/member-detailed.component';
import { MemberDetailResolver } from './_resolver/MemberDetailResolver';
import { MemberListResolver } from './_resolver/MemberListResolver';

export const appRoutes: Routes = [
  { path:'home', component:HomeComponent },
  { path:'members', component:MemberListComponent, canActivate:[AuthGuard] ,
  resolve:{users:MemberListResolver}},
  { path:'members/:id', component:MemberDetailedComponent, canActivate:[AuthGuard],
   resolve:{user:MemberDetailResolver} },
  { path:'lists', component:ListsComponent  },
  { path:'messages', component:MessagesComponent },
  { path:'**', redirectTo:'home', pathMatch:'full'}
];

