import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs/';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable()
export class GalerisService {

    gallery: any[];
    public galleries;

    constructor(private http: HttpClient,
                private authService: AuthService) { }

    getGalleries() {
      this.galleries = [];
      return new Observable((o: Observer<any>) => {
          this.http.get('http://localhost:8000/api/all-galleries', {
              headers: this.authService.getRequestHeaders()
          }).subscribe((galleries: any[]) => {
              this.galleries = galleries['data'];

              o.next(this.galleries);
              return o.complete();
          });
      });
    }
    public getSingleGallery(id) {
        this.gallery = [];
       return new Observable((o: Observer<any>) => {
           this.http.get(`http://localhost:8000/api/gallerie/${id}`, {
           headers: this.authService.getRequestHeaders()
           }).subscribe((gallery: any[]) => {this.gallery = gallery;
               o.next(this.gallery);
               return o.complete();
           });
       });
       }
}
