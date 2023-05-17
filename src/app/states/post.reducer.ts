import { createReducer, on } from "@ngrx/store";
import { initialState } from "./post.state";
import { state } from "@angular/animations";
import { addpost } from "./post.action";

const _postreducer = createReducer (initialState,on(addpost,(state,action)=>{
    
    let post = {...action.post};

    post.id = (state.posts.length + 1).toString();
    return{
        ...state,
        posts:[...state.posts,post]

    }
})
)


export function postreducer(state: any,action: any)
{
    return _postreducer(state,action);
}

