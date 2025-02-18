import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageSwitcherService, LanguageSwitcherConfig, Language } from './language-switcher.service';

@Component({
  selector: 'app-language-switcher',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './language-switcher.component.html',
  styleUrls: ['./language-switcher.component.css']
})
export class LanguageSwitcherComponent implements OnInit {
  config: LanguageSwitcherConfig = { enabled: false, languages: [] };
  visibleLanguages: Language[] = [];
  dropdownOpen: boolean = false;

  constructor(private languageSwitcherService: LanguageSwitcherService) { }

  ngOnInit(): void {
    this.languageSwitcherService.getConfig().subscribe(data => {
      this.config = data;
      this.visibleLanguages = data.languages.filter(lang => lang.enabled).slice(0, 3);
    });
  }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  changeLanguage(lang: Language) {
    console.log('Language changed to:', lang.name);
    this.dropdownOpen = false;
  }
}
