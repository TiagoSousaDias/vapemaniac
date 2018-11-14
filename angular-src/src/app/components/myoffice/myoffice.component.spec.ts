import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyofficeComponent } from './myoffice.component';

describe('MyofficeComponent', () => {
  let component: MyofficeComponent;
  let fixture: ComponentFixture<MyofficeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyofficeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyofficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
