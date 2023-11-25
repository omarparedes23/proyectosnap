import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.models';
import { FaceSnapsService } from '../services/face-snaps.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss'],
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnapz!: FaceSnap;

  buttonText!: string;
  constructor(private service1: FaceSnapsService, private rrr: Router) {}
  ngOnInit() {
    this.buttonText = 'Oh Snap!';
  }
  onAddSnap() {
    if (this.buttonText === 'Oh Snap!') {
      //this.faceSnapz.snaps++;
      this.service1.snapFaceSnapById(this.faceSnapz.id, 'snap');
      this.buttonText = 'Oops, unSnap!';
    } else {
      //this.faceSnapz.snaps--;
      this.service1.snapFaceSnapById(this.faceSnapz.id, 'unsnap');
      this.buttonText = 'Oh Snap!';
    }
  }

  pepe() {
    this.rrr.navigateByUrl(`facesnapsz/${this.faceSnapz.id}`);
  }
}
