import { Component, inject, InjectionToken, OnInit, signal } from '@angular/core';
import { RealDataService } from '../../services/real-data.service';
import { MockDataService } from '../../services/mock-data.service';
import { Config, CONFIG } from '../../constans/test.constants';
import { DataService, dataServiceFactory, dataServiceFactoryConfig } from '../../services/data.service';

export const DATA_SERVICE_ONE = new InjectionToken<DataService>('DATA_SERVICE_ONE');
export const DATA_SERVICE_TWO = new InjectionToken<DataService>('DATA_SERVICE_TWO');

@Component({
  selector: 'app-test',
  imports: [],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss',
  providers: [
    { provide: RealDataService, useClass: MockDataService },
    { provide: CONFIG, useValue: { apiUrl: 'Test' } },
    {
      provide: DATA_SERVICE_ONE,
      useFactory: dataServiceFactory,
    },
    {
      provide: DATA_SERVICE_TWO,
      useFactory: dataServiceFactoryConfig,
      deps: [CONFIG],
    },
  ],
})
export class TestComponent implements OnInit {
  cont = signal<number>(0);

  testDataSrv = inject(RealDataService);
  dataServiceOne = inject(DATA_SERVICE_ONE);
  dataServiceTwo = inject(DATA_SERVICE_TWO);
  config = inject<Config>(CONFIG);
  data = this.testDataSrv.getData();

  ngOnInit(): void {
    setTimeout(() => {
      this.cont.set(1);
    }, 2000);

    console.log('Cont:', this.cont());
    console.log('Data:', this.data);
    console.log('Config token url:', this.config.apiUrl);
    console.log('Config service url:', this.dataServiceOne.apiUrl);
    console.log('Config service with deps url:', this.dataServiceTwo.apiUrl);
  }

  onClick() {
    this.cont.update((cont: number) => cont + 1);
  }
}
