import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-disable',
  templateUrl: './disable.component.html',
  styleUrls: ['./disable.component.css']
})
export class DisableComponent implements OnInit {
  inputvalue1:number;
  inputvalue2:number;
  inputresult:number;
  inputresult2:number;
  inputresult3:number;
  inputresult4:number;
  constructor() { }

  ngOnInit() {
  }
  whenkeyup1(num1){
    
    this.inputvalue1 = parseInt(num1.target.value);
    alert(this.inputvalue1);
  }
  whenkeyup2(num2){
    this.inputvalue2 = parseInt(num2.target.value);

  }
  getResult(){
    this.inputresult=this.inputvalue1+this.inputvalue2;
    this.inputresult2=this.inputvalue1*this.inputvalue2;
    this.inputresult3=this.inputvalue1/this.inputvalue2;
    this.inputresult4=this.inputvalue1-this.inputvalue2;

  }
}
