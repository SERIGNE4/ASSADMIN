import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssformComponent } from './assform.component';

describe('AssformComponent', () => {
  let component: AssformComponent;
  let fixture: ComponentFixture<AssformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
