import { Component, OnInit, ViewEncapsulation, HostListener } from '@angular/core';
import { DataService } from '../data.service';
import { IText } from '../models/text';
import '../js/jquery.bxslider.js';
declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss', '../css/font-awesome.min.css', '../css/jquery.bxslider.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  
  
  public frontpage: any;
  
  //public newText: IText;
  constructor(private _dataService: DataService) { }


  //search() {
    // let promise = new Promise((resolve, reject) => {
     
    //   this._dataService.getFrontPageText()
    //   .subscribe(promise => { this.frontpage = promise;
    //   console.log("FRONTPAGE: " + this.frontpage);
    // } )  
      
  //   });
  //   return promise;
  // }

  ngOnInit() {    
    
    $('.bxslider').bxSlider({
      auto: true,
      mode: 'fade',
      }
    );
    this._dataService.getFrontPageText()
    .subscribe(data => { this.frontpage = data;
    //console.log("FRONTPAGE: " + this.frontpage);
  } )  
    
    
   //this.frontpage = this.search();



      // this._dataService.getHomeOffers()
      // .subscribe(data => this.homeOffers = data)

      // this._dataService.getHomeText()
      // .subscribe(data => this.homeText = data)


      // POST
      //this.newText= {image: "billede", headline: "overskrift", content: "indhold"};
      // this._dataService.postHomeText(this.newText)
      // .subscribe(data => console.log(data))
      // //.subscribe(data => this.homeText = data)

      
      // this._dataService.getFrontPageText()
      // .subscribe(data => {
      //   this.frontpage = data[0];
      //   console.log(this.frontpage);

      // } )      

      // this._dataService.getHomeText()
      // .subscribe(data => this.homeText = data) 
  }


 

}
