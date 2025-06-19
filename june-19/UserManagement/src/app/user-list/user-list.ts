import { Component, ElementRef, ViewChild, OnInit,AfterViewInit } from '@angular/core';
import { UserModel } from '../models/UserModel';
import { UserService } from '../services/user.service';
import { CommonModule } from '@angular/common';
import { debounceTime, distinctUntilChanged, map, startWith, switchMap } from 'rxjs/operators';
import { fromEvent, combineLatest, Observable } from 'rxjs';


@Component({
  selector: 'app-user-list',
  imports: [CommonModule],
  templateUrl: './user-list.html',
  styleUrl: './user-list.css'
})
export class UserList implements OnInit{
    @ViewChild('searchInput') searchInput!: ElementRef;
  @ViewChild('roleSelect') roleSelect!: ElementRef;
  filteredUsers$!: Observable<UserModel[]>;
constructor(private userservice:UserService){}
ngOnInit(): void {
  this.filteredUsers$=this.userservice.users$;
    setTimeout(() => {
    const searchInput$ = fromEvent(this.searchInput.nativeElement, 'input').pipe(
      map((event: any) => event.target.value.trim().toLowerCase()),
      startWith(''),
      debounceTime(300),
      distinctUntilChanged()
    );

    const roleSelect$ = fromEvent(this.roleSelect.nativeElement, 'change').pipe(
      map((event: any) => event.target.value.trim().toLowerCase()),
      startWith('')
    );

    this.filteredUsers$ = combineLatest([searchInput$, roleSelect$, this.userservice.users$]).pipe(
      map(([searchTerm, selectedRole, users]) =>
        users.filter(user =>
          user.fullName.toLowerCase().includes(searchTerm) &&
          (selectedRole === '' || user.role.toLowerCase() === selectedRole)
        )
      )
    );
  });


}

}
