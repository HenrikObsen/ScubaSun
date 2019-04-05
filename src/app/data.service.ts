import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IHomeOffers } from './models/homeOffers';
import { IText } from './models/text';

import {Observable, of, throwError} from 'rxjs';
import {map, catchError} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DataService {

 
  //private _url: string = "/assets/Data/"
  private _url: string = "http://localhost:62520/"
  private _pageUrl: string = "http://scubasun.scubafun.dk/wp-json/wp/v2/"

  constructor(private http: HttpClient) { }

  getFrontPageText(): Observable<JSON[]>{    
    return this.http.get<JSON[]>(this._url + "PageBlock/Get/2")
        .pipe(catchError(this.errorHandler));
  }
  

  




  getHomeText(): Observable<JSON[]>{    
    return this.http.get<JSON[]>(this._pageUrl + "hometext")
        .pipe(catchError(this.errorHandler));
  }
  postHomeText(text:IText){
    return this.http.post("http://api.scubafun.dk/Data/SetValues/",text)     
  }
  getHomeOffers(): Observable<IHomeOffers[]>{
    return this.http.get<IHomeOffers[]>(this._pageUrl + "ibox")
    .pipe(catchError(error => {
      return throwError("Der gik noget galt : " + error.message);
    }));         
  }

  // getHomeText(): Observable<IText[]>{
    
  //   return this.http.get<IText[]>(this._url + "homeIText.json")
  //       .pipe(catchError(this.errorHandler));
  // }


  errorHandler(error : HttpErrorResponse){
    return throwError("Der gik noget galt : " + error.message);
  }
 
}
