import {Routes, RouterModule} from '@angular/router'
import {GoalsComponent} from './goals/goals.component';
import {NgModule} from '@angular/core';
import {AboutComponent} from './about/about.component';
import {GoalDetailComponent} from './goals/goal-detail/goal-detail.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: GoalsComponent},
  {path: 'about', component: AboutComponent},
  {path: 'goal/:id', component: GoalDetailComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes);
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {}
