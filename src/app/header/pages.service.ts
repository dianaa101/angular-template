import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Page {
  name: string;
  route: string;
  enabled: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class PagesService {
  private jsonUrl = 'assets/pages.json';

  constructor(private http: HttpClient) { }

  getPages(): Observable<Page[]> {
    return this.http.get<Page[]>(this.jsonUrl);
  }
}
