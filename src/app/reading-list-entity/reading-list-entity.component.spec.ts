import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadingListEntityComponent } from './reading-list-entity.component';

describe('ReadingListEntityComponent', () => {
  let component: ReadingListEntityComponent;
  let fixture: ComponentFixture<ReadingListEntityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReadingListEntityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReadingListEntityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
