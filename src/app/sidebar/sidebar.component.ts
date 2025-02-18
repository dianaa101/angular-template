import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarService, SidebarConfig, SidebarItem } from './sidebar.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  pages = [
    { name: 'Home', link: '/', enabled: true },
    { name: 'About', link: '/about', enabled: true },
    { name: 'Services', link: '/services', enabled: true },
    { name: 'Contact', link: '/contact', enabled: true }
  ];


  @Input() isExpanded: boolean = true;
  config: SidebarConfig = { enabled: false, expanded: true, items: [] };

  constructor(private sidebarService: SidebarService) { }

  ngOnInit(): void {
    this.sidebarService.getConfig().subscribe(data => {
      this.config = data;
      this.isExpanded = data.expanded;
    });
  }
}

