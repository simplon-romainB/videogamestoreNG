import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NintendoOComponent } from './nintendo-o.component';

describe('NintendoOComponent', () => {
  let component: NintendoOComponent;
  let fixture: ComponentFixture<NintendoOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NintendoOComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NintendoOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
