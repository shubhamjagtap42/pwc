import { state } from '@angular/animations';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { FormState } from 'src/app/module/form.module';

@Component({
  selector: 'app-myform',
  templateUrl: './myform.component.html',
  styleUrls: ['./myform.component.css']
})
export class MyformComponent {


  form!:FormGroup;

  formstate$!:Observable<FormState>;

  constructor(private fb:FormBuilder,private store:Store<FormState>){}

  ngOnInit()
  {
    
  }




}
