import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterService, FooterConfig } from './footer.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  config: FooterConfig = { text: '', enabled: false, sticky: false };

  constructor(private footerService: FooterService) { }

  ngOnInit(): void {
    this.footerService.getFooterConfig().subscribe(data => {
      this.config = data;
    });
  }
}

