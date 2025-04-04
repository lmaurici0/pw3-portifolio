import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageEricComponent } from './page-eric.component';

describe('PageEricComponent', () => {
  let component: PageEricComponent;
  let fixture: ComponentFixture<PageEricComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageEricComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageEricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
