import { Component, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-test',
  imports: [],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss'
})
export class TestComponent implements OnInit {

  cont = signal<number>(0);

  ngOnInit(): void {
    setTimeout(() => {
      this.cont.set(1);
    }, 2000);
  }

  onClick() {
    this.cont.update((cont: number) => cont + 1);
  }
}
