import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonatePetComponent } from './donate-pet.component';

describe('DonatePetComponent', () => {
  let component: DonatePetComponent;
  let fixture: ComponentFixture<DonatePetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonatePetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonatePetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
