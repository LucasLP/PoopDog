import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoopDogProgressBarComponent } from './poop-dog-progress-bar.component';

describe('PoopDogProgressBarComponent', () => {
  let component: PoopDogProgressBarComponent;
  let fixture: ComponentFixture<PoopDogProgressBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PoopDogProgressBarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PoopDogProgressBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
