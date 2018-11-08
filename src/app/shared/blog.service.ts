import { Injectable } from '@angular/core';
//
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Blog } from './../interface/blog';
import { MessageService } from './message.service';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private heroesUrl = 'api/blogs';  // URL to web api

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  /** Log a BlogService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`BlogService: ${message}`);
  }

  /* Old function for mock blogs
  getBlogs(): Observable<Blog[]> {
    return of(BLOGS);
  }
  */

  /** GET blogs from the server */
  getBlogs(): Observable<Blog[]> {
    // TODO: send the message _after_ fetching the blogs
    this.messageService.add('BlogService: fetched heroes');

    return this.http.get<Blog[]>(this.heroesUrl).pipe(
      tap(heroes => this.log('fetched heroes')),
      catchError(this.handleError('getBlogs', []))
    );
  }

  /** GET blog by id. Will 404 if id not found */
  getBlog(id: number): Observable<Blog> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Blog>(url).pipe(
      tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Blog>(`getBlog id=${id}`))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
