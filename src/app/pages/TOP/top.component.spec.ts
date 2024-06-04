import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TOPComponent } from './top.component';

describe('TOPComponent', () => {
  let component: TOPComponent;
  let fixture: ComponentFixture<TOPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TOPComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TOPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
