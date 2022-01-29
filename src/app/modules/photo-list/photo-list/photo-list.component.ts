import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Photo } from 'src/app/shared/interfaces/photo';
import { PhotoBoardService } from 'src/app/shared/services/photo-board/photo-board.service';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss']
})
export class PhotoListComponent implements OnInit {

  public photos$: Observable<Photo[]>;
  public fa = { faCircleNotch }

  constructor(private photoService: PhotoBoardService) {}

  ngOnInit(): void {
    this.photos$ = this.photoService.getPhotos();
  }

}
