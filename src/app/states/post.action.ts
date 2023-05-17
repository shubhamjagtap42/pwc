
import { createAction, props } from '@ngrx/store';
import { Action } from 'rxjs/internal/scheduler/Action';
import { Post } from '../module/post.module';


export const posts = createAction ('posts')


export const Add_post_Action = '[posts page] add post';

export const addpost = createAction(Add_post_Action,props<{post:Post}>())

export const Update_post_Action = '[posts list] update post';

export const updatepost = createAction(Update_post_Action,props<{post:Post}>)
