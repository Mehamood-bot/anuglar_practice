import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveexamplesComponent } from './directiveexamples.component';

describe('DirectiveexamplesComponent', () => {
  let component: DirectiveexamplesComponent;
  let fixture: ComponentFixture<DirectiveexamplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectiveexamplesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectiveexamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
