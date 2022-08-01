import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerComponentDialogComponent } from './manager-component-dialog.component';

describe('ManagerComponentDialogComponent', () => {
  let component: ManagerComponentDialogComponent;
  let fixture: ComponentFixture<ManagerComponentDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerComponentDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerComponentDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
