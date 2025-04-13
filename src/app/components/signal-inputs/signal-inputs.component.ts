import { Component, signal } from '@angular/core';
import { ChildSingalInputComponent } from './child-singal-input/child-singal-input.component';

@Component({
  selector: 'app-signal-inputs',
  standalone: true,
  imports: [ChildSingalInputComponent],
  templateUrl: './signal-inputs.component.html',
  styleUrl: './signal-inputs.component.scss',
})
export class SignalInputsComponent {
  firstName = 'John';
  lastName = 'Doe';

  currentDate: string = '';

  isActive = signal(false);

  constructor() {
    setInterval(() => {
      this.currentDate = (new Date()).toISOString();
    }, 2000);
  }

  onChange(ev: any) {
    console.log('Modify isActive, ', ev);
  }
}
