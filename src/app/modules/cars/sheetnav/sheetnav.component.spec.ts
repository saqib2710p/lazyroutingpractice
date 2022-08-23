import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SheetnavComponent } from './sheetnav.component';

describe('SheetnavComponent', () => {
  let component: SheetnavComponent;
  let fixture: ComponentFixture<SheetnavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SheetnavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SheetnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
