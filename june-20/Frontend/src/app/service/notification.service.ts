import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as signalR from '@microsoft/signalr';
import { Post } from '../models/postmodel';
import { Comment } from '../models/commentmodel';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private hubConnection!: signalR.HubConnection;

  private postsSubject = new BehaviorSubject<Post[]>([]);
  posts$ = this.postsSubject.asObservable();

  private commentsSubject = new BehaviorSubject<Comment[]>([]);
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
      this.postsSubject.next([post, ...current.slice(0, 4)]); // keep max 5
    });

    // Handle live comments
    this.hubConnection.on('ReceiveComment', (comment: Comment) => {
      const current = this.commentsSubject.value;
      this.commentsSubject.next([comment, ...current.slice(0, 4)]);
    });
  }

  // Called from your component to load recent initial data
  public loadInitial(posts: Post[], comments: Comment[]): void {
    this.postsSubject.next(posts);
    this.commentsSubject.next(comments);
  }
}
