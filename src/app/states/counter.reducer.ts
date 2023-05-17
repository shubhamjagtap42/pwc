
import {createReducer,on} from "@ngrx/store";
import { initialState } from "./counter.state";
import { channelname, custom, custom1, decrement, increment, reset } from "./counter.action";
import { state } from "@angular/animations";

const _counterReducer = createReducer(initialState, on(increment,state =>{
    return{
        ...state,
        counter:state.counter + 1,

    };
}),on(decrement,state =>{
    return{
        ...state,
        counter:state.counter -1,
    }
}),
on(reset,state=>{
    return{
        ...state,
        counter : 0
    }
}),
on(custom,(state,action)=>{
    console.log(action);
    
    return{
        ...state,
        counter: state.counter + action.count
    }
}),
on(custom1,(state,action)=>{
    console.log(action);
    
    return {
        ...state,
        counter: state.counter + action.count1
    }
}),
on(channelname,state=>{
    return{
        ...state,
        channel:'shubham jagtap web dev'
    }
})
)

export function counterReducer(state: any, action: any)
{
    return _counterReducer(state,action);
}