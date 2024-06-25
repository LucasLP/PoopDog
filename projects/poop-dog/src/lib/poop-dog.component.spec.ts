import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoopDogComponent } from './poop-dog.component';

describe('PoopDogComponent', () => {
  let component: PoopDogComponent;
  let fixture: ComponentFixture<PoopDogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PoopDogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PoopDogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
