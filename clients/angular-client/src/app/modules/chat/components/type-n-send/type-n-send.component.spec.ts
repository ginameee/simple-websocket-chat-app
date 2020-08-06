import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeNSendComponent } from './type-n-send.component';

describe('TypeNSendComponent', () => {
  let component: TypeNSendComponent;
  let fixture: ComponentFixture<TypeNSendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeNSendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeNSendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
