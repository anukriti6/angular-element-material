import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NewsTableComponent } from './components/news-table/news-table.component';
import { NewsRoutingModule } from './news-routing.module';
import {MatTableModule} from '@angular/material/table';
import { NewsCardComponent } from './components/news-card/news-card.component';
import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [NewsTableComponent, NewsCardComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    NewsRoutingModule,
    MatTableModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class NewsModule { }
