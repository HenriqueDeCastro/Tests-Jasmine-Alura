import { Inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { buildPhotoList } from '../../components/photo-board/test/build-photo-list';
import { Photo } from '../../interfaces/photo';

import { PhotoBoardService } from './photo-board.service';

@Injectable()
export class PhotoBoardMockService extends PhotoBoardService {
  public getPhotos(): Observable<Photo[]> {
    return of(buildPhotoList());
  }
}
