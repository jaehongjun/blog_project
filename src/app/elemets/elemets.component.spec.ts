import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElemetsComponent } from './elemets.component';

describe('ElemetsComponent', () => {
  let component: ElemetsComponent;
  let fixture: ComponentFixture<ElemetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElemetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElemetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
