import { Component } from '@angular/core';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss'],
})
export class BadgeComponent {
  badges = '10';
  hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }
}
