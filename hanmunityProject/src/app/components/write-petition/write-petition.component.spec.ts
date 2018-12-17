import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WritePetitionComponent } from './write-petition.component';

describe('WritePetitionComponent', () => {
  let component: WritePetitionComponent;
  let fixture: ComponentFixture<WritePetitionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WritePetitionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WritePetitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
