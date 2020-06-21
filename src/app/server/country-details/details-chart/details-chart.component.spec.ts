import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsChartComponent } from './details-chart.component';

describe('DetailsChartComponent', () => {
  let component: DetailsChartComponent;
  let fixture: ComponentFixture<DetailsChartComponent>;

  beforeEach(async(() => {
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
