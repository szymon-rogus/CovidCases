import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DetailsChartComponent } from './details-chart.component';

describe('DetailsChartComponent', () => {
  let component: DetailsChartComponent;
  let fixture: ComponentFixture<DetailsChartComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
