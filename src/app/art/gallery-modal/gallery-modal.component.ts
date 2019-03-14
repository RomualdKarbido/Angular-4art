import {Component, OnInit} from '@angular/core';
import {GalleryOneComponent} from '../../art/gallery-one/gallery-one.component';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import {delay} from 'rxjs-compat/operator/delay';
import {el} from '@angular/platform-browser/testing/src/browser_util';

@Component({
  selector: 'app-gallery-modal',
  templateUrl: './gallery-modal.component.html',
  styleUrls: ['./gallery-modal.component.scss'],
  animations: [
    trigger('NextPhoto', [
      state('open', style({
        opacity: 1,
        right: '0px',
      })),
      state('closed', style({
        opacity: 0,
        top: '100px'
      })),
      transition('open => closed', [
        animate('0.1s')
      ]),
      transition('closed => open', [
        animate('0.1.5s')
      ]),
    ]),
  ]
})
export class GalleryModalComponent implements OnInit {
  public modalpicture: any = this.galleryOneComponent.modalpicture;
  public GalleryPagePhotosId: any = this.galleryOneComponent.GalleryPagePhotosId;
  public img: any = [];
  public photolistnew: any = this.galleryOneComponent.photolistnew;
  public isOpen = true;

  constructor( private galleryOneComponent: GalleryOneComponent ) {

  }

  private changePhotoNext(id, self) {
    let nextId: number = null;
    for (let f = 0; f < self.photolistnew.length; f++) {
      let timeid: number = +self.photolistnew[f].id;
      if (id == timeid) {
        nextId = +self.photolistnew[f + 1].id;
        for (let d = 0; d < self.photolistnew.length; d++) {
          if (self.photolistnew[d].id == nextId) {
            self.modalpicture = self.photolistnew[d];
            self.isOpen = true;
          }
        }
      }
      else if (id == self.GalleryPagePhotosId[self.GalleryPagePhotosId.length - 1]) {
        self.modalpicture = self.photolistnew[0];
        self.isOpen = true;
      }

    }
  }

  private changePhotoPrew(id, self) {
    let nextId: number = null;
    for (let f = 0; f < self.photolistnew.length; f++) {
      let timeid: number = +self.photolistnew[f].id;
      if (id == timeid) {
        nextId = +self.photolistnew[f - 1].id;
        for (let d = 0; d < self.photolistnew.length; d++) {
          if (self.photolistnew[d].id == nextId) {
            self.modalpicture = self.photolistnew[d];
            self.isOpen = true;
          }
        }
      }
      else if (id == self.photolistnew[0].id) {
        self.modalpicture = self.photolistnew[self.photolistnew.length - 1];
        self.isOpen = true;
      }

    }
  }

  nextpicture(id) {
    this.isOpen = false;
    let self: any = this;
    setTimeout(this.changePhotoNext, 300, id, self);
  }


  prewpicture(id) {
    this.isOpen = false;
    let self: any = this;
    setTimeout(this.changePhotoPrew, 300, id, self);
  }


  ngOnInit() {
  }

}
