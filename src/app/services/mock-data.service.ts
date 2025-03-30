import { Injectable } from '@angular/core';

@Injectable()
export class MockDataService {
  getData() {
    return [
      { id: 1, name: 'John Mock', age: 30 },
      { id: 2, name: 'Jane Mock', age: 25 },
      { id: 3, name: 'Alice Mock', age: 28 },
      { id: 4, name: 'Bob Mock', age: 35 }
    ];
  }
}
