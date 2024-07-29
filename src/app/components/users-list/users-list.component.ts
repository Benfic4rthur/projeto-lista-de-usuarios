import { Component, Output, EventEmitter, Input } from '@angular/core';
import { IUser } from '../../interfaces/user/user.interface';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss',
})
export class UsersListComponent {
  @Output('userSelected') userSelectedEmitt = new EventEmitter<IUser>();
  displayedColumns: string[] = ['name', 'date', 'status'];
  @Input({ required: true }) usersList: IUser[] = [];

  onUserSelected(user: IUser) {
    this.userSelectedEmitt.emit(user);
  }
}
