import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {
  private baseUrl = 'https://openlibrary.org';

  constructor(private http: HttpClient) { }

  searchBooks(query: string): Observable<any> {
    const url = `${this.baseUrl}/search.json?q=${encodeURIComponent(query)}`;
    return this.http.get<any>(url);
  }

  getBookDetails(olid: string): Observable<any> {
    const url = `${this.baseUrl}/works/${olid}.json`;
    return this.http.get<any>(url);
  }

  getAuthorName(authorKey: string): Observable<any> {
    return this.http.get(`https://openlibrary.org${authorKey}.json`);
  }

}
