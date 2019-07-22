import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KardexCardAddComponent } from './kardex-card-add.component';

describe('KardexCardAddComponent', () => {
  let component: KardexCardAddComponent;
  let fixture: ComponentFixture<KardexCardAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KardexCardAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KardexCardAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
