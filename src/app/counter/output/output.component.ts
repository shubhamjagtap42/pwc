import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { appstate } from 'src/app/Store/app.state';
import { channelname } from 'src/app/states/counter.action';
import { getchannelname, getcounter } from 'src/app/states/counter.selector';
import { counterstate } from 'src/app/states/counter.state';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit{

  counter:any
  counterSubscription!: Subscription;

  counter$!:Observable<number>
  constructor(private store:Store<appstate>)
  {
    this.counter$=this.store.select(getcounter)

      // console.log('counter is called');
      
      // this.counter = counter
    

    
  }
  

  ngOnInit():void{

  this.counterSubscription=this.store.select('counter').subscribe((data:any)=>{
    this.counter = data.counter

    // console.log(this.counter);
    
  });

  // this.counter$ = this.store.select('counter')

  // console.log(this.counter$,'data');
  

  }

}
