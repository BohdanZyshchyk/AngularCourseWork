import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, ViewContainerRef } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { Observable } from 'rxjs';
import { AddMemeComponent } from '../Client-area/meme/add-meme/add-meme.component';
import { Meme } from '../Models/meme.model';

@Injectable({
  providedIn: 'root'
})
export class MemeService {

  constructor(private http: HttpClient,
    private modal: NzModalService) { }

  memeUrl = "/api/Meme";
  onUpvote = new EventEmitter<boolean>();
  onAdd = new EventEmitter<boolean>();


  getAllMemes(): Observable<Meme[]> {
    return this.http.get<Meme[]>(this.memeUrl);
  }
  getUpvotedMemes(userId:string):Observable<Meme[]> {
    return this.http.get<Meme[]>(`${this.memeUrl}/getupvote/${userId}`);
  }
  getDownvotedMemes():Observable<Meme[]> {
    return this.http.get<Meme[]>(`${this.memeUrl}/getdownvote`);
  }
  upvoteMeme(id:number, userId:string): Observable<Meme[]>{
    return this.http.get<Meme[]>(`${this.memeUrl}/upvote/${id}/${userId}`);
  }
  downvoteMeme(id:number, userId: string): Observable<Meme[]>{
    return this.http.get<Meme[]>(`${this.memeUrl}/downvote/${id}/${userId}`);
  }

  getMemeById(id: number): Observable<Meme>{
    return this.http.get<Meme>(`${this.memeUrl}/detail/`+ id);
  }
  
  
}
