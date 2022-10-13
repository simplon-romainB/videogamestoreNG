import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsolesNComponent } from './consoles-n.component';

describe('ConsolesNComponent', () => {
  let component: ConsolesNComponent;
  let fixture: ComponentFixture<ConsolesNComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsolesNComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsolesNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
