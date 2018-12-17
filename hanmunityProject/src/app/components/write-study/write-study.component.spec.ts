import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WriteStudyComponent } from './write-study.component';

describe('WriteStudyComponent', () => {
  let component: WriteStudyComponent;
  let fixture: ComponentFixture<WriteStudyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WriteStudyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WriteStudyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
