import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { MemeComment } from 'src/app/Models/comment.model';
import { CommentsService } from 'src/app/Services/comments.service';
import jwt_decode from "jwt-decode";

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css']
})
export class AddCommentComponent implements OnInit {

  constructor(private commentServ: CommentsService,
    private router: Router) { }

  ngOnInit() {
    this.userId = jwt_decode(localStorage.getItem('token')).id;

  }

  @Input() memeId: number;
  // @Output() onChanged = new EventEmitter<boolean>();
  userId: string;
  data: any[] = [];
  submitting = false;
  inputValue = '';

  handleSubmit(): void {
    this.submitting = true;
    const content = this.inputValue;
    this.inputValue = '';
    const commentAdd = new MemeComment(0, content, new Date().toString(), "test", this.userId, this.memeId.toString());
    console.log("Comment");
    console.log(commentAdd);
    this.commentServ.addComment(commentAdd).subscribe(
      data => {
        this.commentServ.onChanged.emit(true);
        this.submitting = false;
        this.router.navigateByUrl(`/meme/${this.memeId}`, {skipLocationChange:true}).then(
          ()=>{
            this.router.navigate([`/meme/${this.memeId}`]);
          }
        )
        // this.onChanged.emit(true);
      }
    )
  }

  checklogged() {
    console.log("USER ID")
    console.log(this.userId)
    if (this.userId) {
      return;
    }
    this.router.navigate([`/sign-up`]);
  }

}
