import { Component, OnInit } from '@angular/core';
import { Meme } from 'src/app/Models/meme.model';
import {ActivatedRoute} from '@angular/router';
import { MemeService } from 'src/app/Services/meme.service';
import { CommentsService } from 'src/app/Services/comments.service';
import { MemeComment } from 'src/app/Models/comment.model';

@Component({
  selector: 'app-meme',
  templateUrl: './meme.component.html',
  styleUrls: ['./meme.component.css']
})
export class MemeComponent implements OnInit {

  constructor(private memeService:MemeService,
    private commmentService: CommentsService,
    private route:ActivatedRoute) { }
  meme: Meme;
  comments: MemeComment[];
  memeId: number;
  ngOnInit() {
    this.memeId = Number(this.route.snapshot.paramMap.get('id'));
    this.memeService.getMemeById(this.memeId).subscribe(data=>{
      this.meme = data;
    })
  }

  

}
