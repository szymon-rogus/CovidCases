import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GlobalComponent } from './global.component';

describe('GlobalComponent', () => {
  let component: GlobalComponent;
  let fixture: ComponentFixture<GlobalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    component.globalData = {
      TotalConfirmed: 10000,
      TotalRecovered: 1000,
      TotalDeaths: 100,
      NewConfirmed: 10,
      NewRecovered: 5,
      NewDeaths: 0,
      Date: new Date(Date.now()),
    };

    fixture.detectChanges();

    expect(fixture.debugElement.nativeElement.innerHTML)
      .toContain(component.globalData.TotalConfirmed);

    expect(fixture.debugElement.nativeElement.innerHTML)
      .toContain(component.globalData.TotalRecovered);

    expect(fixture.debugElement.nativeElement.innerHTML)
      .toContain(component.globalData.TotalDeaths);

    expect(fixture.debugElement.nativeElement.innerHTML)
      .toContain(component.globalData.NewConfirmed);

    expect(fixture.debugElement.nativeElement.innerHTML)
      .toContain(component.globalData.NewRecovered);

    expect(fixture.debugElement.nativeElement.innerHTML)
      .toContain(component.globalData.NewDeaths);

    expect(fixture.debugElement.nativeElement.innerHTML)
      .toContain(component.globalData.Date);
  });
});
