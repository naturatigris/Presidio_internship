import { Injectable } from '@angular/core';
import { BehaviorSubject,combineLatest,map } from 'rxjs';
import * as signalR from '@microsoft/signalr';
import { Post } from '../models/postmodel';
import { Comment } from '../models/commentmodel';
import { PostLike } from '../models/postlikemodel';

export interface UINotification<T> {
  item: T;
  read: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private hubConnection!: signalR.HubConnection;

private postsSubject = new BehaviorSubject<UINotification<Post>[]>([]);
posts$ = this.postsSubject.asObservable();
private postsLikeSubject = new BehaviorSubject<UINotification<PostLike>[]>([]);
postsLike$ = this.postsLikeSubject.asObservable();


private commentsSubject = new BehaviorSubject<UINotification<Comment>[]>([]);
comments$ = this.commentsSubject.asObservable();

  constructor() {
    this.startConnection();
  }

  private startConnection(): void {
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl('http://localhost:5147/notification')
      .withAutomaticReconnect()
      .build();

    this.hubConnection
      .start()
      .then(() => console.log('✅ SignalR connection started'))
      .catch((err) => console.error('SignalR connection error:', err));

    // Handle live posts
this.hubConnection.on('ReceivePost', (post: Post) => {
  const current = this.postsSubject.value;
  this.postsSubject.next([{ item: post, read: false }, ...current.slice(0, 4)]);
});
this.hubConnection.on('ReceivePostLike', (post: PostLike) => {
  const current = this.postsLikeSubject.value;
  this.postsLikeSubject.next([{ item: post, read: false }, ...current.slice(0, 4)]);
});

this.hubConnection.on('ReceiveComment', (comment: Comment) => {
  const current = this.commentsSubject.value;
  this.commentsSubject.next([{ item: comment, read: false }, ...current.slice(0, 4)]);
});
  }
  markPostAsRead(postId: string) {
  const updated = this.postsSubject.value.map(n =>
    n.item.id === postId ? { ...n, read: true } : n
  );
  this.postsSubject.next([...updated]); 
}

markCommentAsRead(commentId: string) {
  const updated = this.commentsSubject.value.map(n =>
    n.item.id === commentId ? { ...n, read: true } : n
  );
  this.commentsSubject.next([...updated]);
}

readonly hasUnread$ = combineLatest([
  this.posts$,
  this.comments$
]).pipe(
  map(([posts, comments]) =>
    posts.some(p => !p.read) || comments.some(c => !c.read)
  )
);

}
