import { Component, OnInit, Input } from '@angular/core';
import { FaceSnapsService } from '../services/face-snaps.service';
import { FaceSnap } from '../models/face-snap.models';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss'],
})
export class SingleFaceSnapComponent implements OnInit {
  //@Input() faceSnapz!: FaceSnap;
  face1!: FaceSnap;

  buttonText!: string;
  constructor(
    private service1: FaceSnapsService,
    private rrr: ActivatedRoute
  ) {}
  ngOnInit() {
    this.buttonText = 'Oh Snap!';
    const faceid = +this.rrr.snapshot.params['idnumber'];
    this.face1 = this.service1.getFaceSnapById(faceid);
  }
  onAddSnap() {
    if (this.buttonText === 'Oh Snap!') {
      //this.faceSnapz.snaps++;
      this.service1.snapFaceSnapById(this.face1.id, 'snap');
      this.buttonText = 'Oops, unSnap!';
    } else {
      //this.faceSnapz.snaps--;
      this.service1.snapFaceSnapById(this.face1.id, 'unsnap');
      this.buttonText = 'Oh Snap!';
    }
  }
}
