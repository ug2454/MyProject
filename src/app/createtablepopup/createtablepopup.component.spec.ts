import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatetablepopupComponent } from './createtablepopup.component';

describe('CreatetablepopupComponent', () => {
  let component: CreatetablepopupComponent;
  let fixture: ComponentFixture<CreatetablepopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatetablepopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatetablepopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
