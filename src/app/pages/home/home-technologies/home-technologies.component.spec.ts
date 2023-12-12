import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTechnologiesComponent } from './home-technologies.component';

describe('HomeTechnologiesComponent', () => {
  let component: HomeTechnologiesComponent;
  let fixture: ComponentFixture<HomeTechnologiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeTechnologiesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeTechnologiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
