import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-placeholder',
  template: `<ng-content (click)="onClickEvent.emit($event)"></ng-content>`,
  styleUrls: ['./app-placeholder.component.scss']
})
export class AppPlaceholderComponent {
  @Output() onClickEvent: EventEmitter<any> = new EventEmitter<any>();
}
