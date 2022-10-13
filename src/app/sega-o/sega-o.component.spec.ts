import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegaOComponent } from './sega-o.component';

describe('SegaOComponent', () => {
  let component: SegaOComponent;
  let fixture: ComponentFixture<SegaOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SegaOComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SegaOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
