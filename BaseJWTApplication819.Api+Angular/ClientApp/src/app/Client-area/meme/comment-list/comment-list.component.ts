import { Component, Input, OnInit } from '@angular/core';
import { MemeComment } from 'src/app/Models/comment.model';
import { CommentsService } from 'src/app/Services/comments.service';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {

comments: MemeComment[];
  constructor(private commmentService: CommentsService) {
    this.commmentService.onChanged.subscribe(()=>{
      this.getData();
    });
   }
  @Input() memeId: number;

  ngOnInit() {
    this.getData();
    console.log("comment list")
    console.log(this.comments)
  }
  getData(){
    this.commmentService.getAllComments(this.memeId).subscribe(data=>{
      console.log("COMMENT DATA");
      console.log(data);
      this.comments = data;
    })
  }
  // data = [];
}
