import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';

const routes: Routes = [
  /* { path: '',   redirectTo: '/home', pathMatch: 'full' },
  {
  path:'home',
  component: NavigationComponent,
  children:[{
  path:'news',
  loadChildren: () => import('./modules/news/news.module').then(m => m.NewsModule)

}]
} */
{ path: '',   redirectTo: '/news', pathMatch: 'full' },
{
  path:"news",
  loadChildren: () => import('./modules/news/news.module').then(m => m.NewsModule)
}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
