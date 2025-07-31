import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Notification } from './notification';
import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { NotificationService } from '../services/notification.service';
import { of } from 'rxjs';
import { UserModel } from '../models/user.model';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { AlertService, InactivityAlert } from '../services/inactive.alert';
import { DocumentRestoreService } from '../services/documentrestore.service';



@Component({
  selector: 'app-navbar',
  standalone: true,
  template: ''
})
class FakeNavbar {}

describe('Notification', () => {
  let component: Notification;
  let fixture: ComponentFixture<Notification>;

  let userServiceSpy : jasmine.SpyObj<UserService>;
  let notifyServiceSpy : jasmine.SpyObj<NotificationService>;
  let alertServiceSpy : jasmine.SpyObj<AlertService>;
  let documentRestoreSpy: jasmine.SpyObj<DocumentRestoreService>;


  beforeEach(async () => {
    notifyServiceSpy = jasmine.createSpyObj("NotificationService",["startConnection"],{ notification$: of([{ user: "Test", message: "Test" }]) });
    userServiceSpy = jasmine.createSpyObj("UserService",["getAll"],{ user$: of(new UserModel("1")) });
    alertServiceSpy = jasmine.createSpyObj("AlertService",["getActiveAlerts"],{ alerts$: of([])});
    documentRestoreSpy = jasmine.createSpyObj("DocumentRestoreService", ["getAllRequests"]);


    await TestBed.configureTestingModule({
      imports: [Notification,MatCardModule,MatButtonModule, MatIconModule],
      providers : [
        {provide : UserService, useValue : userServiceSpy},
        {provide : NotificationService, useValue : notifyServiceSpy},
        {provide : AlertService, useValue : alertServiceSpy},
              { provide: DocumentRestoreService, useValue: documentRestoreSpy }


      ]
    })
    .compileComponents();

    TestBed.overrideComponent(Notification, {
		set: {
		imports: [
			FakeNavbar,MatCardModule,MatButtonModule, MatIconModule
      
			]
		}
	});

    // notifyServiceSpy.notification$ = of([{user: "Test", message:"Test"}]);
    // userServiceSpy.user$ = of(new UserModel("1"));
    fixture = TestBed.createComponent(Notification);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
