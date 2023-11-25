import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap.models';

@Injectable({
  providedIn: 'root',
})
export class FaceSnapsService {
  //this.
  faceSnapszz: FaceSnap[] = [
    {
      id: 1,
      title: 'Archibald',
      description: 'Mon meilleur ami depuis tout petit !',
      imageUrl:
        'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      createdDate: new Date(),
      snaps: 7,
      location: 'Paris',
    },
    {
      id: 2,
      title: 'Three Rock Mountain',
      description: 'Mon meilleur ami depuis tout petit !',
      imageUrl:
        'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      createdDate: new Date(),
      snaps: 2,
      location: 'Paris',
    },
    {
      id: 3,
      title: 'Un bon repas',
      description: 'Mon meilleur ami depuis tout petit !',
      imageUrl:
        'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      createdDate: new Date(),
      snaps: 3,
      location: 'Paris',
    },
  ];
  getAllFaceSnaps(): FaceSnap[] {
    return this.faceSnapszz;
  }
  getFaceSnapById(id: number): FaceSnap {
    const xx = this.faceSnapszz.find((tempo) => tempo.id === id);
    if (!xx) {
      throw new Error('Face snap no encontrado');
    } else {
      //xx.snaps++;
      return xx;
    }
  }

  snapFaceSnapById(id: number, snapType: 'snap' | 'unsnap'): void {
    const yy = this.getFaceSnapById(id);
    snapType === 'snap' ? yy.snaps++ : yy.snaps--;
  }
}
