import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartPageTwoComponent } from './chart-page-two.component';

describe('ChartPageTwoComponent', () => {
  let component: ChartPageTwoComponent;
  let fixture: ComponentFixture<ChartPageTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartPageTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartPageTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
