import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UptsellComponent } from './uptsell.component';

describe('UptsellComponent', () => {
  let component: UptsellComponent;
  let fixture: ComponentFixture<UptsellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UptsellComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UptsellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
