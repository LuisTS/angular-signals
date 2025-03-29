import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TestComponent } from './components/test/test.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { CharactersComponent } from './components/characters/characters.component';
import { CharactersImprovedComponent } from './components/characters-improved/characters-improved.component';
import { FormsComponent } from './components/forms/forms.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [
    NgIf,
    TestComponent,
    TodoListComponent,
    CharactersComponent,
    CharactersImprovedComponent,
    FormsComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-signals';
}
