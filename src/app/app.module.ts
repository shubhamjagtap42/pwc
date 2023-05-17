import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { NgrxcrudComponent } from './ngrxcrud/ngrxcrud.component';
import { FileUploadModule } from 'primeng/fileupload';
import { CardModule } from 'primeng/card';
import { HttpClientModule } from '@angular/common/http';
import { CounterComponent } from './counter/counter.component';
import { OutputComponent } from './counter/output/output.component';
import { ButtonsComponent } from './counter/buttons/buttons.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './states/counter.reducer';
import { SelectorComponent } from './counter/selector/selector.component';
import { CustomCounterInputComponent } from './custom-counter-input/custom-counter-input.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { PostlistComponent } from './post/postlist/postlist.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environment/environment';
import { postreducer } from './states/post.reducer';
import { appreducer } from './Store/app.state';
import {TableModule} from 'primeng/table';
import { AddpostComponent } from './post/addpost/addpost.component';
import {InputTextareaModule} from 'primeng/inputtextarea';
import { MyformComponent } from './reactiveform/myform/myform.component';
import { MyloginComponent } from './mylogin/mylogin.component';
import { EditpostComponent } from './post/editpost/editpost.component';





@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    NgrxcrudComponent,
    CounterComponent,
    OutputComponent,
    ButtonsComponent,
    SelectorComponent,
    CustomCounterInputComponent,
    HomeComponent,
    HeaderComponent,
    PostlistComponent,
    AddpostComponent,
    MyformComponent,
    MyloginComponent,
    EditpostComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputTextModule,
    ButtonModule,
    FileUploadModule,
    ReactiveFormsModule,
    InputTextareaModule,
    FormsModule,
    TableModule,
    CardModule,
    HttpClientModule,
    StoreModule.forRoot(appreducer),
    StoreDevtoolsModule.instrument({  
      logOnly:environment.production,
    }),
],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
