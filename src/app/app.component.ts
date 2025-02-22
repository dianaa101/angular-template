import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { LanguageSwitcherComponent } from './language-switcher/language-switcher.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, RouterModule, FooterComponent, LanguageSwitcherComponent, SidebarComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // sidebarExpanded = false;
  sidebarEnabled = true;
  sidebarExpanded: boolean = false;

  onSidebarToggled(isExpanded: boolean) {
    this.sidebarExpanded = isExpanded;
  }
}
