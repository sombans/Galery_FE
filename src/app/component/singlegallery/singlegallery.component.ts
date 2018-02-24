import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { AuthService } from '../../shared/service/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { GalerisService } from '../../shared/service/galeris.service';
import { $ } from 'protractor';

@Component({

  selector: 'app-singlegallery',
  templateUrl: './singlegallery.component.html',
  styleUrls: ['./singlegallery.component.css']
})
export class SingleGalleryComponent implements OnInit {


  public gallery: any[] = [];
  public params;

  constructor(
    public auth: AuthService,
    public galleryService: GalerisService,
    public route: ActivatedRoute) { this.route.params.subscribe((params: Params) => {
      this.params = params;
  });
       this.galleryService.getSingleGallery(this.params.id).subscribe(
  data => {
      this.gallery = data;
  },
  (err: HttpErrorResponse) => {
      alert(`Backend returned code ${err.status} with message: ${err.error}`);
  }
);
}

  ngOnInit() {
  }
}
