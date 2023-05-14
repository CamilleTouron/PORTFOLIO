import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecriptionModifierComponent } from './decription-modifier.component';

describe('DecriptionModifierComponent', () => {
  let component: DecriptionModifierComponent;
  let fixture: ComponentFixture<DecriptionModifierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DecriptionModifierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DecriptionModifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
