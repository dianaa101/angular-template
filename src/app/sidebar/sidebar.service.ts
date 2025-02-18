import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface SidebarItem {
  name: string;
  link: string;
  enabled: boolean;
}

export interface SidebarConfig {
  enabled: boolean;
  expanded: boolean;
  items: SidebarItem[];
}

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  private jsonUrl = 'assets/sidebar.json';

  constructor(private http: HttpClient) { }

  getConfig(): Observable<SidebarConfig> {
    return this.http.get<SidebarConfig>(this.jsonUrl);
  }
}

