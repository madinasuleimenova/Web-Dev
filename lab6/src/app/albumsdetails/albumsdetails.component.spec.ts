import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumsdetailsComponent } from './albumsdetails.component';

describe('AlbumsdetailsComponent', () => {
  let component: AlbumsdetailsComponent;
  let fixture: ComponentFixture<AlbumsdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlbumsdetailsComponent ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumsdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
