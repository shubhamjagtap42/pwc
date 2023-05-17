import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { CustomCounterInputComponent } from './custom-counter-input/custom-counter-input.component';
import { PostlistComponent } from './post/postlist/postlist.component';
import { AddpostComponent } from './post/addpost/addpost.component';
import { EditpostComponent } from './post/editpost/editpost.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'counter',
    component: CounterComponent,
  },
  {
    path: 'customcounter',
    component: CustomCounterInputComponent,
  },
  {
    path: 'post',
    component: PostlistComponent,

    children: [{ path: 'addpost', component: AddpostComponent },{
      path:'edit/:id',component:EditpostComponent,
    }],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
