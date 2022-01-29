import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { PhotoBoardService } from './photo-board.service';

const mockedData = {
  api: 'http://localhost:3000/photos',
  data: [
    {
      id: 1,
      description: 'test 1',
      src: ''
    },
    {
      id: 2,
      description: 'test 2',
      src: ''
    }
  ]
}

describe(PhotoBoardService.name, () => {
  let service: PhotoBoardService;
  let httpController: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [PhotoBoardService]
    }).compileComponents();
    service = TestBed.inject(PhotoBoardService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it(`#${PhotoBoardService.prototype.getPhotosDescriptionUpperCase.name}
    should return photos with description in uppercase`, done => {
      service.getPhotosDescriptionUpperCase().subscribe(photos => {
        expect(photos[0].description).toBe('TEST 1');
        expect(photos[1].description).toBe('TEST 2');
        done();
      });

      httpController
        .expectOne(mockedData.api)
        .flush(mockedData.data);
  });
});
