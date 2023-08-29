import { Component } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  postTitle: string = "";
  postDetails: string = "";
  postImageURL: string = "";
  postURL: string = "";
  isChecked: boolean = false;
}
