import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadingListAddEditComponent } from './reading-list-add-edit.component';

describe('ReadingListAddEditComponent', () => {
  let component: ReadingListAddEditComponent;
  let fixture: ComponentFixture<ReadingListAddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReadingListAddEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReadingListAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
