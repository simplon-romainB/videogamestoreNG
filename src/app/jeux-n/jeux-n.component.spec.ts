import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JeuxNComponent } from './jeux-n.component';

describe('JeuxNComponent', () => {
  let component: JeuxNComponent;
  let fixture: ComponentFixture<JeuxNComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JeuxNComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JeuxNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
