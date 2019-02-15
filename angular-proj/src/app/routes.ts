import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MemberListComponent } from './member-list/member-list.component';
import { ListsComponent } from './lists/lists.component';
import { MessagesComponent } from './messages/messages.component';
import { AuthGuard } from './_guard/auth.guard';

export const appRoutes: Routes = [
  { path:'home', component:HomeComponent },
  { path:'members', component:MemberListComponent, canActivate:[AuthGuard] },
  { path:'lists', component:ListsComponent  },
  { path:'messages', component:MessagesComponent },
  { path:'**', redirectTo:'home', pathMatch:'full'}
];

