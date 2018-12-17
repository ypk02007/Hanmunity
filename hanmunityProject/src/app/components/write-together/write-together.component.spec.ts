import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WriteTogetherComponent } from './write-together.component';

describe('WriteTogetherComponent', () => {
  let component: WriteTogetherComponent;
  let fixture: ComponentFixture<WriteTogetherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WriteTogetherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WriteTogetherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
