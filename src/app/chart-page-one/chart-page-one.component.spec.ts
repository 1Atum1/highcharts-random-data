import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartPageOneComponent } from './chart-page-one.component';

describe('ChartPageOneComponent', () => {
  let component: ChartPageOneComponent;
  let fixture: ComponentFixture<ChartPageOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartPageOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartPageOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
