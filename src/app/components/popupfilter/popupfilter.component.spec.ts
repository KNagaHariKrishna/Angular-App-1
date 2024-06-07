import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupfilterComponent } from './popupfilter.component';

describe('PopupfilterComponent', () => {
  let component: PopupfilterComponent;
  let fixture: ComponentFixture<PopupfilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupfilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupfilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
