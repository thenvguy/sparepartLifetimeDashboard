import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SparepartFormComponent } from './sparepart-form.component';

describe('SparepartFormComponent', () => {
  let component: SparepartFormComponent;
  let fixture: ComponentFixture<SparepartFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SparepartFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SparepartFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
