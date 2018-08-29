
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { EduardoComponent } from './eduardo.component';

describe('EduardoComponent', () => {
  let component: EduardoComponent;
  let fixture: ComponentFixture<EduardoComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EduardoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EduardoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
