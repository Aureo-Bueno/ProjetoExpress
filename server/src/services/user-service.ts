import { v4 as uuid } from "uuid";
import { User } from "../types/user";
import { logger } from "../utils/logger";
import { UserFactory } from "../factory/user-factory";

export class UserService {
  private users: User[] = UserFactory.createMany(20);

  private logger = logger.child({ service: "UserService" });
  constructor() {}

  getUsers(): User[] {
    this.logger.info(
      `Retrieving all users - Total users: ${this.users.length}`
    );
    return this.users;
  }

  createUser(userData: Omit<User, "id">): User {
    const user = { ...userData, id: uuid() };
    this.users.push(user);
    this.logger.info(`User created with ID: ${user.id}`);
    return user;
  }

  getUser(id?: string): User | undefined {
    this.logger.info(`Retrieving user with ID: ${id}`);
    return this.users.find((user) => user.id === id);
  }

  deleteUser(id: string): boolean {
    const index = this.users.findIndex((user) => user.id === id);
    if (index !== -1) {
      this.users.splice(index, 1);
      this.logger.info(`User deleted with ID: ${id}`);
      return true;
    }
    this.logger.warn(`User not found with ID: ${id}`);
    return false;
  }

  updateUser(id: string, userData: Omit<User, "id">): User | undefined {
    const index = this.users.findIndex((user) => user.id === id);
    if (index !== -1) {
      this.users[index] = { ...userData, id };
      this.logger.info(`User updated with ID: ${id}`);
      return this.users[index];
    }
    this.logger.warn(`User not found with ID: ${id}`);
    return undefined;
  }
}
