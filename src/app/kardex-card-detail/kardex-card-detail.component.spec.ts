import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KardexCardDetailComponent } from './kardex-card-detail.component';

describe('KardexCardDetailComponent', () => {
  let component: KardexCardDetailComponent;
  let fixture: ComponentFixture<KardexCardDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KardexCardDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KardexCardDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
