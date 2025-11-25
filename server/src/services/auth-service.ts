import { User } from "../types/user";
import { logger } from "../utils/logger";
import { UserService } from "./user-service";

interface AuthResult {
  success: boolean;
  user?: User;
  token?: string;
}

export class AuthService {
  private userService: UserService;
  private logger = logger.child({ service: "AuthService" });

  constructor(userService: UserService) {
    this.userService = userService;
  }

  authenticate(email: string, password: string): AuthResult {
    this.logger.info(`Authenticating user with email: ${email}`);

    const users = this.userService.getUsers();
    const user = users.find((u) => u.email === email);

    if (user && password === "password123") {
      this.logger.info(`User authenticated successfully: ${email}`);

      const token = this.generateToken(user.id);

      return {
        success: true,
        user: {
          id: user.id,
          email: user.email,
          name: user.name || "",
          createdAt: user.createdAt || new Date().toISOString(),
          contact: "",
          password: ""
        },
        token,
      };
    }

    this.logger.warn(`Authentication failed for email: ${email}`);
    return { success: false };
  }

  private generateToken(userId: string): string {
    // TODO: Implementar JWT
    // import jwt from 'jsonwebtoken';
    // const token = jwt.sign(
    //   { userId, iat: Date.now() },
    //   process.env.JWT_SECRET || 'secret',
    //   { expiresIn: '24h' }
    // );
    // return token;

    return `token_${userId}_${Date.now()}`;
  }
}
