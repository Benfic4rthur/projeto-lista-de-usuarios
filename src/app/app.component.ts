import { Component, OnInit } from '@angular/core';
import { IUser } from './interfaces/user/user.interface';
import { UsersList } from './data/users-list';
import { IFilterOptions } from './interfaces/filter-options.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'], // Corrigido para styleUrls
})
export class AppComponent implements OnInit {
  title = 'projeto-lista-de-usuarios';
  usersList: IUser[] = [];
  userSelected: IUser = {} as IUser;
  showUserDetails: boolean = false;

  ngOnInit() {
    setTimeout(() => {
      this.usersList = UsersList;
    }, 0);
  }

  onUserSelected(user: IUser) {
    this.showUserDetails = true;
    this.userSelected = user;
  }

  onFilter(filterOptions: IFilterOptions) {
    this.usersList = UsersList;
  }
}
