import { counterstate } from "./counter.state";

import { createFeatureSelector, createSelector } from "@ngrx/store";



const getcounterstate = createFeatureSelector<counterstate>('counter');

export const getcounter = createSelector(getcounterstate,state=>{
    return state.counter
});

export const getchannelname = createSelector(getcounterstate,state=>{
    return state.channel
})