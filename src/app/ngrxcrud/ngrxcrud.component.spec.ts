import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxcrudComponent } from './ngrxcrud.component';

describe('NgrxcrudComponent', () => {
  let component: NgrxcrudComponent;
  let fixture: ComponentFixture<NgrxcrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgrxcrudComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgrxcrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
