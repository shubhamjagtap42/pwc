import { FormState } from "../module/form.module";
import { counterReducer } from "../states/counter.reducer";
import { counterstate } from "../states/counter.state";
import { postreducer } from "../states/post.reducer";
import { poststate } from "../states/post.state";

export interface appstate {
    counter : counterstate;
    posts : poststate;
    // forms:FormState;
}

export const appreducer =
{
    counter : counterReducer,
    posts : postreducer,
    // forms:formreducer,
}    