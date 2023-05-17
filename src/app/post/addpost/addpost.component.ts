import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { appstate } from 'src/app/Store/app.state';
import { Post } from 'src/app/module/post.module';
import { addpost } from 'src/app/states/post.action';

@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.component.html',
  styleUrls: ['./addpost.component.css'],
})
export class AddpostComponent {
  postForm!: FormGroup;
  posts!:Post

  constructor(private store:Store<appstate>){}
  

  ngOnInit() {
    this.postForm = new FormGroup({
      product: new FormControl(this.posts.product, [
        Validators.required,
        Validators.minLength(10),
      ]),
      description: new FormControl(null, [
        Validators.required,
        Validators.minLength(20),
      ]),
    });
  }

  onAddpost() {
    // alert('hi This Is ngrx');
    console.log("starting");
    


    if (this.postForm.valid) {
      
    
    console.log(this.postForm.valid);
    

    const post: Post =

    {
      product: this.postForm.value.product,
      description: this.postForm.value.description,
    };

    this.store.dispatch(addpost({post}));
  }
  else
  {
    alert("This Is SomeThing Else")
  }
}
}