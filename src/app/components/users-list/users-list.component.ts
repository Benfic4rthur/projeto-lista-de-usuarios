import { Component, Output, EventEmitter } from '@angular/core';
import { IUser } from '../../interfaces/user/user.interface';
import { UsersList } from '../../data/users-list';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss',
})
export class UsersListComponent {
  @Output('userSelected') userSelectedEmitt = new EventEmitter<IUser>();
  displayedColumns: string[] = ['name', 'date', 'status'];
  usersList: IUser[] = UsersList;

  onUserSelected(user: IUser) {
    this.userSelectedEmitt.emit(user);
  }
}
