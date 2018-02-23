import { Component, OnInit } from '@angular/core';
import { GalerisService } from '../../shared/service/galeris.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-gallerys',
  templateUrl: './gallerys.component.html',
  styleUrls: ['./gallerys.component.css']
})
export class GallerysComponent implements OnInit {

  public galleries;


  constructor(private galleryService: GalerisService) {
    this.galleryService.getGalleries().subscribe(
      data => {
        this.galleries = data;
      },
      (err: HttpErrorResponse) => {
        alert(`Backend returned code ${err.status} with message: ${err.error}`);
      }
    );
  }



  ngOnInit() {
  }

}
