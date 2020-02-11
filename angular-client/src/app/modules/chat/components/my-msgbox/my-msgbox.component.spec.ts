import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyMsgboxComponent } from './my-msgbox.component';

describe('MyMsgboxComponent', () => {
  let component: MyMsgboxComponent;
  let fixture: ComponentFixture<MyMsgboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyMsgboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyMsgboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
