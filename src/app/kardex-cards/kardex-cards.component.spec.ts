import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KardexCardsComponent } from './kardex-cards.component';

describe('KardexCardsComponent', () => {
  let component: KardexCardsComponent;
  let fixture: ComponentFixture<KardexCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KardexCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KardexCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
