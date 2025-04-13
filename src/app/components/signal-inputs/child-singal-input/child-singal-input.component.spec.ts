import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildSingalInputComponent } from './child-singal-input.component';

describe('ChildSingalInputComponent', () => {
  let component: ChildSingalInputComponent;
  let fixture: ComponentFixture<ChildSingalInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildSingalInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildSingalInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
