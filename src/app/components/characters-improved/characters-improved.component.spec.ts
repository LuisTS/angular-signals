import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactersImprovedComponent } from './characters-improved.component';

describe('CharactersImprovedComponent', () => {
  let component: CharactersImprovedComponent;
  let fixture: ComponentFixture<CharactersImprovedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharactersImprovedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharactersImprovedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
