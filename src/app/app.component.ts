import { Component } from '@angular/core';
import { IUser } from './interfaces/user/user.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'projeto-lista-de-usuarios';
  userSelected: IUser = {} as IUser;
  showUserDetails = false;

  onUserSelected(user: IUser) {
    this.showUserDetails = true;
    this.userSelected = user;
  }
}
