import { state } from "@angular/animations";
import { poststate } from "./post.state";

import { createFeatureSelector, createSelector, props } from "@ngrx/store";
import { posts } from "./post.action";

const getpoststate = createFeatureSelector<poststate>('posts')

export const getposts = createSelector(getpoststate,(state)=>{
    return state.posts
});

export const getpostbyid = createSelector(getpoststate,(state:any,props:any) =>{
    // console.log(props);

    return state.posts.find((post:any) => post.id === props.id)

    
    
});













