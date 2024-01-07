import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderAuthButtonsComponent } from './header-auth-buttons.component';

describe('HeaderAuthButtonsComponent', () => {
  let component: HeaderAuthButtonsComponent;
  let fixture: ComponentFixture<HeaderAuthButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderAuthButtonsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderAuthButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
