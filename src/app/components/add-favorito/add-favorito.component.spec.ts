/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AddFavoritoComponent } from './add-favorito.component';

describe('AddFavoritoComponent', () => {
  let component: AddFavoritoComponent;
  let fixture: ComponentFixture<AddFavoritoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFavoritoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFavoritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
