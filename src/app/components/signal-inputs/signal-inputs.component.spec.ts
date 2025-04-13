import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalInputsComponent } from './signal-inputs.component';

describe('SignalInputsComponent', () => {
  let component: SignalInputsComponent;
  let fixture: ComponentFixture<SignalInputsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalInputsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
