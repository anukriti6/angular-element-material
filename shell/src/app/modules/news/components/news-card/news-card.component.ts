import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NewsResponse } from '../../models/news-response';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.scss']
})
export class NewsCardComponent implements OnInit {
newsResponse$: Observable<NewsResponse>;
  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.newsResponse$ = this.newsService.getTopNews('in');
  }

}
