import { Photo } from "src/app/shared/interfaces/photo";

export function buildPhotoList(): Photo[] {
  const photos: Photo[] = [];

  for (let index = 0; index < 8; index++) {
    photos.push({
      id: index + 1,
      url: 'http://test.com',
      description: 'description teste'
    });
  }

  return photos;
}
