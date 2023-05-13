import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguagemodeComponent } from './languagemode.component';

describe('LanguagemodeComponent', () => {
  let component: LanguagemodeComponent;
  let fixture: ComponentFixture<LanguagemodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LanguagemodeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LanguagemodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
