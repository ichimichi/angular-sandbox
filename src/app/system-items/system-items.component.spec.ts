import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemItemsComponent } from './system-items.component';

describe('SystemItemsComponent', () => {
  let component: SystemItemsComponent;
  let fixture: ComponentFixture<SystemItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SystemItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
