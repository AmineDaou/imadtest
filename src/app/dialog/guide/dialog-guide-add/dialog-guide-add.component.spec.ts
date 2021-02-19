import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogGuideAddComponent } from './dialog-guide-add.component';

describe('DialogGuideAddComponent', () => {
  let component: DialogGuideAddComponent;
  let fixture: ComponentFixture<DialogGuideAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogGuideAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogGuideAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
