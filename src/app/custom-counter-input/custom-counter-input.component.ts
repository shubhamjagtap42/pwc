import { Component } from '@angular/core';
import { counterReducer } from '../states/counter.reducer';
import { Store } from '@ngrx/store';
import { counterstate } from '../states/counter.state';
import { channelname, custom, custom1 } from '../states/counter.action';
import { getchannelname } from '../states/counter.selector';
import { Observable } from 'rxjs';
import { appstate } from '../Store/app.state';


@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.css']
})
export class CustomCounterInputComponent {

  value:any;
  value1:any;
  channel:any;
  channelname:any
  channelname$!:Observable<string>

  constructor(private store:Store<appstate>){}



  ngOnInit():void{

    this.channelname$=this.store.select(getchannelname)

      // console.log(this.channelname$);
      
    
  }

  onAdd()
  {
    console.log(this.value);

    this.store.dispatch(custom({count: + this.value}))

    // this.value = counterReducer
    // console.log('counter is called');
    
    
  }

  onsubstract()
  {
    console.log(this.value1);

    this.store.dispatch(custom1({count1: - this.value1}))
    
  }

  onchangechannel()
  {
  //  console.log(this.channelname$);

   this.store.dispatch(channelname());
  //  console.log(this.channel);

  // console.log('observable called');
  

   
  }

}


