import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MemeComment } from '../Models/comment.model';
import { Comment } from '@angular/compiler';
import { ApiResponse } from '../Models/api.response';
@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private http: HttpClient) { }

  commentUrl = "/api/Comments"
  onChanged = new EventEmitter<boolean>();
  getAllComments(id:number): Observable<MemeComment[]>{
    console.log("Meme id on service")
    console.log(id)
    return this.http.get<MemeComment[]>(`${this.commentUrl}/commentslist/` + id);
  }

  addComment(comment:MemeComment):Observable<ApiResponse>{
    const response = this.http.post<ApiResponse>(`${this.commentUrl}/addcomment`, comment);
    return response;
  }
}
