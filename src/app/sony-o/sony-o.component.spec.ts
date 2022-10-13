import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SonyOComponent } from './sony-o.component';

describe('SonyOComponent', () => {
  let component: SonyOComponent;
  let fixture: ComponentFixture<SonyOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SonyOComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SonyOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
