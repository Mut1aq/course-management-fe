import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderWhyChooseMeComponent } from './header-why-choose-me.component';

describe('HeaderWhyChooseMeComponent', () => {
  let component: HeaderWhyChooseMeComponent;
  let fixture: ComponentFixture<HeaderWhyChooseMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderWhyChooseMeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderWhyChooseMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
