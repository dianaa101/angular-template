import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PagesService, Page } from './pages.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  pages: Page[] = [];

  constructor(private pagesService: PagesService) { }

  ngOnInit(): void {
    this.pagesService.getPages().subscribe(data => {
      this.pages = data;
    });
  }
}
