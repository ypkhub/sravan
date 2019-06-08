import { Component, OnInit } from '@angular/core';
import { MockNgModuleResolver } from '@angular/compiler/testing';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styles: [`.online{color:white;background:green}`]
})
export class FeaturesComponent implements OnInit {

  serverId = 20;
  serverName = 'mangodb';
  allownewUser = true;
  currentStatus = "server was not created";
  candidateName = "";
  projectName = "firstapp";
  serverStatus = 'offline';
  serverCreated = true;

  constructor() {
    setTimeout(()=>{this.allownewUser = false;},3000);
    this.serverStatus=Math.random()>.5 ? "Online" : "offline";
   }

  ngOnInit() {
  }
  getresult(){
    // return this.candidateName="prasanna";
   this.currentStatus = "server created and name is"+this.serverName;
  //  this.serverCreated = false;
  }
  whenOnkeyUp(prasanna){
     this.projectName = prasanna.target.value;
  }

  getserverColor(){
    return this.serverStatus =="Online" ? "hai" : "orange";
  }
}
