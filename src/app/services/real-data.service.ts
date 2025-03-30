import { Injectable } from '@angular/core';

@Injectable()
export class RealDataService {
  getData() {
    return [
      { id: 1, name: 'John Doe', age: 30 },
      { id: 2, name: 'Jane Smith', age: 25 },
      { id: 3, name: 'Alice Johnson', age: 28 },
      { id: 4, name: 'Bob Brown', age: 35 }
    ];
  }
}
