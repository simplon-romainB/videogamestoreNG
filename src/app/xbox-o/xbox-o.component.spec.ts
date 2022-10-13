import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XboxOComponent } from './xbox-o.component';

describe('XboxOComponent', () => {
  let component: XboxOComponent;
  let fixture: ComponentFixture<XboxOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XboxOComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(XboxOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
