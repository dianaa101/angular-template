import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface FooterConfig {
  text: string;
  enabled: boolean;
  sticky: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class FooterService {
  private jsonUrl = 'assets/footer.json';

  constructor(private http: HttpClient) { }

  getFooterConfig(): Observable<FooterConfig> {
    return this.http.get<FooterConfig>(this.jsonUrl);
  }
}
