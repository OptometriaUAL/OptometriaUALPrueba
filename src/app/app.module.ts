import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PostComponent } from './post/post.component';
import { PostlistComponent } from './postlist/postlist.component';
import { AppendPipe } from './pipes/append.pipe';
import { AppendCLIPipe } from './pipes/append-cli.pipe';
import { SummaryPipe } from './pipes/summary.pipe';
import { PostListComponent } from './post-list/post-list.component';
import { PostService } from './Services/post.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PostComponent,
    PostlistComponent,
    AppendPipe,
    AppendCLIPipe,
    SummaryPipe,
    PostListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
