import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { Observable } from 'rxjs';
import { NewsResponse } from '../../models/news-response';

@Component({
  selector: 'app-news-table',
  templateUrl: './news-table.component.html',
  styleUrls: ['./news-table.component.scss']
})
export class NewsTableComponent implements OnInit {
  newsResponse$: Observable<NewsResponse>;
  displayedColumns: string[] = ['cover','display_title','mpaa_rating','summary_short'];

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.newsResponse$ = this.newsService.getTopNews('in');
  }

}
