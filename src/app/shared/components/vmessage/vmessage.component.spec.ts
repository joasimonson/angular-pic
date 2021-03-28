import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VMessageComponent } from './vmessage.component';

describe('VmessageComponent', () => {
  let component: VMessageComponent;
  let fixture: ComponentFixture<VMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
