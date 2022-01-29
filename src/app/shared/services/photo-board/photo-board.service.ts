import { Photo } from './../../interfaces/photo';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { delay, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PhotoBoardService {

  constructor(private http: HttpClient) { }

  getPhotos(): Observable<Photo[]> {
    return this.http.get<Photo[]>('http://localhost:3000/photos').pipe(delay(2000));
  }

  getPhotosDescriptionUpperCase(): Observable<Photo[]> {
    return this.http.get<Photo[]>('http://localhost:3000/photos')
      .pipe(map(
        photos => {
        return photos.map(photo => {
          return {...photo, description: photo.description.toUpperCase()}
        })
      }))
      .pipe(delay(2000));
  }
}
