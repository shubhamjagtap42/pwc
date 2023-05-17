import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { appstate } from 'src/app/Store/app.state';
import { Post } from 'src/app/module/post.module';
import { getposts } from 'src/app/states/post.selector';
import { poststate } from 'src/app/states/post.state';

@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.css']
})
export class PostlistComponent {

  constructor(private store:Store<appstate>){}

  posts$!: Observable<any[]>;
  // products: Post[] = [];
   ishide=true

  

 ngOnInit():void{

  this.posts$ = this.store.select(getposts);
 }

 hidetable()
 {
  this.ishide = false
 }

 showtable()
 {
  this.ishide = true
 }
 tablehide()
 {
  this.ishide = false
 }

}
