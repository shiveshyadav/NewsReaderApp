import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import 'rxjs';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { mapNewsFromServer } from '../selector/selector';
import INews from '../models/news.interface';

@Injectable()
export class NewsService {

  baseUrl: string = "https://newsapi.org/v2/top-headlines";
  constructor(private http: HttpClient) {
  }

  //Shiv - In use
  getNewsDetails(options: any): Observable<INews[]> {

    return this.http.get<INews[]>(this.baseUrl, options)
      .pipe(
        map((result: any) => (mapNewsFromServer(result.articles)), (err: string) => this.handleError(err))

      );
  }

  getNewsDetailsBySorting(options: any): Observable<INews[]> {
    return this.http.get<INews[]>(this.baseUrl, options)
      .pipe(
        map((result: any) => (mapNewsFromServer(result.articles)), (err: string) => this.handleError(err))
      );
  }

  getNewsDetailsByPageSize(options:any): Observable<INews[]> {
    return this.http.get<INews[]>(this.baseUrl, options)
      .pipe(
        map((result: any) => (mapNewsFromServer(result.articles)), (err: string) => this.handleError(err))
      );
  }

  searchNews(options: any): Observable<INews[]> {
    return this.http.get<INews[]>(this.baseUrl, options)
      .pipe(
        map((result: any) => (mapNewsFromServer(result.articles)), (err: string) => this.handleError(err))

      );
  }

  private handleError(error: any) {
    console.error('server error:', error);
    if (error.error instanceof Error) {
      const errMessage = error.error.message;
      return Observable.throw(errMessage);
    }
    return Observable.throw(error || 'Server error');
  }
}
