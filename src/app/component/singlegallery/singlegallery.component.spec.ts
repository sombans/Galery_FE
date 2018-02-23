import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SigleImageComponent } from './singlegallery.component';

describe('SigleImageComponent', () => {
  let component: SigleImageComponent;
  let fixture: ComponentFixture<SigleImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SigleImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SigleImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
