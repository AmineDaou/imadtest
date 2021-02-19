import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuideUpdateComponent } from './guide-update.component';

describe('GuideUpdateComponent', () => {
  let component: GuideUpdateComponent;
  let fixture: ComponentFixture<GuideUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuideUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuideUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
