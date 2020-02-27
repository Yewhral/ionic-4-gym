import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'training',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../training/training.module').then(m => m.TrainingPageModule)
          }
        ]
      },
      {
        path: 'exercises',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../exercises/exercises.module').then(m => m.ExercisesPageModule)
          }
        ]
      },
      {
        path: 'reports',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../reports/reports.module').then(m => m.ReportsPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/training',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/training',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
