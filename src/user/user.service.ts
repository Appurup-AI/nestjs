import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  private users = [
    { id: 1, username: 'john_doe', email: 'john.doe@gmail.com' },
    { id: 2, username: 'bob', email: 'bob@gmail.com' },
    { id: 3, username: 'admin', email: 'admin@gmail.com' },
  ];

  findAll() {
    return this.users;
  }
}
