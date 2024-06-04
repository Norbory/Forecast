import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LWXComponent } from './lwx.component';

describe('LWXComponent', () => {
  let component: LWXComponent;
  let fixture: ComponentFixture<LWXComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LWXComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LWXComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
