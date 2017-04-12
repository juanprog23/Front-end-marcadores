/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FavoritosService } from './favoritos.service';

describe('FavoritosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FavoritosService]
    });
  });

  it('should ...', inject([FavoritosService], (service: FavoritosService) => {
    expect(service).toBeTruthy();
  }));
});
