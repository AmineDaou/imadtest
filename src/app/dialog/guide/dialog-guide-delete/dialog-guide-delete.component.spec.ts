import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogGuideDeleteComponent } from './dialog-guide-delete.component';

describe('DialogGuideDeleteComponent', () => {
  let component: DialogGuideDeleteComponent;
  let fixture: ComponentFixture<DialogGuideDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogGuideDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogGuideDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
