import { NgFor } from '@angular/common';
import { Component, effect, signal, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Task {
  title?: string;
  description?: string;
  priority?: string;
}

@Component({
  selector: 'app-todo-list',
  imports: [FormsModule, NgFor],
  standalone: true,
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent {

  tasks: WritableSignal<Task[]> = signal<Task[]>(JSON.parse(localStorage.getItem('tasks') || '[]'));

  constructor() {
    effect(() => {
      console.log(`Tasks ${this.tasks().length}`);
      localStorage.setItem('tasks', JSON.stringify(this.tasks()));
    })
  }

  onSubmit(value: Task) {
    this.tasks.update((tasks: Task[]) => [...tasks, value]);
  }

  deleteTask(index: number) {
    this.tasks.update((tasks: Task[]) => tasks.filter((_, i) => i !== index));
  }
}
