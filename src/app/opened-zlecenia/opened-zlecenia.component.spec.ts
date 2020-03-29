import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenedZleceniaComponent } from './opened-zlecenia.component';

describe('OpenedZleceniaComponent', () => {
  let component: OpenedZleceniaComponent;
  let fixture: ComponentFixture<OpenedZleceniaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenedZleceniaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenedZleceniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
