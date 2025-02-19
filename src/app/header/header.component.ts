import { Component, Output, EventEmitter, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LanguageSwitcherComponent } from '../language-switcher/language-switcher.component';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, LanguageSwitcherComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  pages = [
    { name: 'Home', link: '/', enabled: true },
    { name: 'About', link: '/about', enabled: true },
    { name: 'Services', link: '/services', enabled: true },
    { name: 'Contact', link: '/contact', enabled: true }
  ];

  @Input() isSidebarEnabled: boolean = false;
  isSidebarExpanded: boolean = true;

  @Output() sidebarToggled = new EventEmitter<boolean>(); 

  toggleSidebar() {
    this.isSidebarExpanded = !this.isSidebarExpanded;
    this.sidebarToggled.emit(this.isSidebarExpanded); 
  }
}
