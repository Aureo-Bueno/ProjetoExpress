import { User } from "../types/user";

export class UserFactory {
  private static readonly ADMIN_USER: User = {
    id: "a62dbc99-0099-4d69-875b-be05d5eaa8dc",
    name: "Admin User",
    email: "admin@test.com",
    contact: "123-456-7890",
    password: "password123",
    createdAt: new Date().toISOString(),
  };

  static create(overrides?: Partial<User>): User {
    return {
      id: `user-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`,
      name: `User ${Math.floor(Math.random() * 10000)}`,
      email: `user${Date.now()}@test.com`,
      contact: "000-000-0000",
      password: "password123",
      createdAt: new Date().toISOString(),
      ...overrides,
    };
  }
  static createMany(count: number, overrides?: Partial<User>): User[] {
    return [
      this.ADMIN_USER,
      ...Array.from({ length: count }, () => this.create(overrides)),
    ];
  }
}
