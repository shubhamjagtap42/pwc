import { Component, EventEmitter, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { appstate } from 'src/app/Store/app.state';
import { decrement, increment, reset } from 'src/app/states/counter.action';
import { counterstate } from 'src/app/states/counter.state';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent {
  

  isshow = true
  
 constructor(private store: Store<appstate>){}
 
  onincreament()
  {
    this.store.dispatch(increment())
  }
  ondecreament()
  {
    this.store.dispatch(decrement())
  }
  onreset()
  {
    this.store.dispatch(reset())
  }
  onshow()
  {
    this.isshow = this.isshow
  }

}
