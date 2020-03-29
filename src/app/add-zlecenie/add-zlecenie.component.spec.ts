import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddZlecenieComponent } from './add-zlecenie.component';

describe('AddZlecenieComponent', () => {
  let component: AddZlecenieComponent;
  let fixture: ComponentFixture<AddZlecenieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddZlecenieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddZlecenieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
