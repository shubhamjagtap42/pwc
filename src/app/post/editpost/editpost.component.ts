import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { appstate } from 'src/app/Store/app.state';
import { Post } from 'src/app/module/post.module';
import { getpostbyid } from 'src/app/states/post.selector';

@Component({
  selector: 'app-editpost',
  templateUrl: './editpost.component.html',
  styleUrls: ['./editpost.component.css'],
})
export class EditpostComponent implements OnInit, OnDestroy {
  post!: Post;
  postForm!: FormGroup;
  postSubscription!: Subscription;
  // ishide=false
  constructor(private route: ActivatedRoute, private store: Store<appstate>) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      // console.log(params.get('id'));
      const id = params.get('id'); 

      this.postSubscription = this.store
        .select(getpostbyid, { id })
        .subscribe((data) => {
          this.post = data; 

          // console.log(this.post);
          this.createForm();
        });

      // console.log(id);
      // console.log(this.post);
    });
  }
  ngOnDestroy(): void {
    if (this.postSubscription) 
    {
      this.postSubscription.unsubscribe();
    }
  }

  onUpdate()
   {
    
   }

  tablehi()
  {
    // this.ishide = true
  }

  createForm() {
    this.postForm = new FormGroup({
      product: new FormControl(this.post.product, [
        Validators.required,
        Validators.minLength(6),
      ]),
      discription: new FormControl(this.post.description, [
        Validators.required,
        Validators.minLength(20),
      ]),
    });
    {
    }
  }
}
