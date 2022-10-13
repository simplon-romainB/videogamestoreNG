import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessoiresNComponent } from './accessoires-n.component';

describe('AccessoiresNComponent', () => {
  let component: AccessoiresNComponent;
  let fixture: ComponentFixture<AccessoiresNComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccessoiresNComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccessoiresNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
