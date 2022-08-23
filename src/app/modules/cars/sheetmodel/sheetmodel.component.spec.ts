import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SheetmodelComponent } from './sheetmodel.component';

describe('SheetmodelComponent', () => {
  let component: SheetmodelComponent;
  let fixture: ComponentFixture<SheetmodelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SheetmodelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SheetmodelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
