import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AProposComponent } from './apropos.component';

describe('AProposComponent', () => {
  let component: AProposComponent;
  let fixture: ComponentFixture<AProposComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AProposComponent]
    });
    fixture = TestBed.createComponent(AProposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
