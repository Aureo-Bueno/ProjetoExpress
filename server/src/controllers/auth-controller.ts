import { AuthService } from "../services/auth-service";
import { UserService } from "../services/user-service";
import { logger } from "../utils/logger";
import { Request, Response } from "express";

interface LoginBody {
  email: string;
  password: string;
}

class AuthController {
  private authService: AuthService;
  private logger = logger.child({ controller: "AuthController" });

  constructor(authService: AuthService) {
    this.authService = authService;
  }

  login(req: Request, res: Response): void {
    try {
      const { email, password }: LoginBody = req.body;

      if (!email || !password) {
        logger.warn("Login attempt with missing email or password");
        res.status(400).json({
          success: false,
          message: "Email and password are required",
        });
        return;
      }

      const result = this.authService.authenticate(email, password);

      if (result.success && result.user) {
        logger.info(`User logged in successfully: ${email}`);
        res.status(200).json({
          success: true,
          message: "Login Successful",
          data: { user: result.user, token: result.token },
        });
      } else {
        logger.warn(`Failed login attempt for email: ${email}`);
        res.status(401).json({
          success: false,
          message: "Invalid email or password",
        });
      }
    } catch (error) {
      logger.error(`Error during login: ${error}`);
      res.status(500).json({
        success: false,
        message: "Error during login",
      });
    }
  }

  logout(req: Request, res: Response): void {
    // Implementar lógica de logout (invalidar token, etc)
    res.status(200).json({
      success: true,
      message: "Logout successful",
    });
  }

  getCurrentUser(req: Request, res: Response): void {
    // Implementar middleware de autenticação antes desta rota
    res.status(200).json({
      success: true,
      data: (req as any).user,
    });
  }
}

export const authController = new AuthController(
  new AuthService(new UserService())
);
