import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {
  inputNumber:number;
  inputNumber2:number;
  result:number;
  constructor() { }
  getResult(opt){
    if(opt=='+'){
      this.result=(Number(this.inputNumber)+Number(this.inputNumber2));
    }else if(opt=='-'){
      this.result=(Number(this.inputNumber)-Number(this.inputNumber2));
    }
    
  }
  ngOnInit() {
  }

}
