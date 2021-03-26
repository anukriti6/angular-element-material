import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NewsResponse } from '../models/news-response';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  getTopNews(country: string): Observable<NewsResponse>{
    return this.http.get<NewsResponse>('https://api.nytimes.com/svc/movies/v2/reviews/picks.json?order=by-opening-date&api-key=EyHe8GW0DIGagp1YkXY5HEUyPD9wiKIb');
  }
}
