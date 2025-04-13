import { Component, computed, effect, input, model } from '@angular/core';

@Component({
  selector: 'app-child-singal-input',
  standalone: true,
  imports: [],
  templateUrl: './child-singal-input.component.html',
  styleUrl: './child-singal-input.component.scss',
})
export class ChildSingalInputComponent {
  firstName = input('', {
    alias: 'firstName',
    transform: (value: string) => value.toUpperCase(),
  });
  lastName = input.required<string>();

  fullName = computed(() => {
    return `${this.firstName()} ${this.lastName()}`;
  });

  currentDate = input.required<string>();

  isActive = model(false);

  constructor() {
    effect(() => {
      console.log(`Full name is: ${this.fullName()}`);
      console.log(`Current date is: ${this.currentDate()}`);
    });
  }

  oncClick() {
    this.isActive.update((value) => !value);
    console.log(`Active is: ${this.isActive()}`);
  }
}
