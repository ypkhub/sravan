import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {
  serverName = "prasanna";
  getserverColor=false;
  getColor;
  serverCreated = true;
  serverArray = ['tester1'];
  inputname = "prasanna";
  constructor() {}

  ngOnInit() {
  }
getresult(){
  this.serverArray.push(this.serverName);
  if(this.serverArray.length>=5){
    this.getserverColor=true;
  }
  if(this.getserverColor){
    this.getColor = "blue";
  }
}
getresult2(){
  // this.serverCreated=this.serverCreated ? false : true;
  if(this.serverCreated){
    this.serverCreated=false;
  }else{
    this.serverCreated=true;
  }
}
}
