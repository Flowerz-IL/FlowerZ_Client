import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-action-approve',
  templateUrl: './action-approve.component.html',
  styleUrls: ['./action-approve.component.css']
})
export class ActionApproveComponent implements OnInit {

  constructor() {
    
   }
  counter:Number=1;
  ngOnInit(): void {
  }

  setCounter(int:number)
  {
    this.counter=1;
  }
  


}
