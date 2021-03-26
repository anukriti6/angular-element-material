import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NewsTableComponent } from './components/news-table/news-table.component';
import { NewsCardComponent } from './components/news-card/news-card.component';

const newsRoutes: Routes = [
    { path: '', component: NewsTableComponent },
     { path: 'card', component: NewsCardComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(newsRoutes)
  ],
  exports:[RouterModule]
})
export class NewsRoutingModule { }
