import { createAction, props } from '@ngrx/store';

export const increment = createAction('increament');
export const decrement = createAction('decreament');
export const reset = createAction('resets');
export const custom = createAction('customincreament', props<{ count: any }>());

export const custom1 = createAction(
  'custom1increament',
  props<{ count1: any }>()
);


export const channelname = createAction('changechannelname')
