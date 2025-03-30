import { Injectable, Inject } from '@angular/core';
import { Config } from '../constans/test.constants';

@Injectable()
export class DataService {
  apiUrl: string;

  constructor(@Inject(String) apiUrl: string) {
    this.apiUrl = apiUrl;
  }
}

export function dataServiceFactory() {
  const apiUrl =
    window.location.hostname === 'localhost'
      ? 'http://localhost:3000'
      : 'https://api.example.com';
  return new DataService(apiUrl);
}

export function dataServiceFactoryConfig(config: Config): DataService {
  return new DataService(config.apiUrl);
}
