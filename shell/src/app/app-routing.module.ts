import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';

const routes: Routes = [{
  path:'',
  component: NavigationComponent,
  children:[{
  path:'news',
  loadChildren: () => import('./modules/news/news.module').then(m => m.NewsModule)

}]
}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
