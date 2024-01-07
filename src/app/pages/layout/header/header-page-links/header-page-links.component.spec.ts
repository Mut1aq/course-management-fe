import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderPageLinksComponent } from './header-page-links.component';

describe('HeaderPageLinksComponent', () => {
  let component: HeaderPageLinksComponent;
  let fixture: ComponentFixture<HeaderPageLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderPageLinksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderPageLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
