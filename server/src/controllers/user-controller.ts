import { Request, Response } from "express";
import { logger } from "../utils/logger";
import { UserService } from "../services/user-service";
import { User } from "../types/user";

class UserController {
  private logger = logger.child({ service: "UserService" });
  private userService: UserService;

  constructor(userService: UserService) {
    this.userService = userService;
  }

  getUsers(req: Request, res: Response): void {
    try {
      const users = this.userService.getUsers();
      this.logger.info(`Retrieving all users - Total users: ${users.length}`);
      res.status(200).json({
        success: true,
        message: "Get users Successful",
        data: users,
      });
    } catch (error) {
      this.logger.error(`Error retrieving users: ${error}`);
      res.status(500).json({
        success: false,
        message: "Error during getting users",
      });
    }
  }

  createUser(req: Request, res: Response): void {
    try {
      const user: Omit<User, "id"> = req.body;

      if (!user.name || !user.email || !user.contact) {
        this.logger.warn("Attempted to create user with missing fields");
        res.status(400).send("Missing required user fields");
        return;
      }

      this.userService.createUser(user);
      this.logger.info(`User created`);
      res.status(201).send({
        success: true,
        message: "User created successfully",
      });
    } catch (error) {
      this.logger.error(`Error creating user: ${error}`);
      res.status(500).json({
        success: false,
        message: "Error during creating user",
      });
    }
  }

  getUser(req: Request, res: Response): void {
    try {
      if (!req.params.id) {
        this.logger.warn("User ID parameter is missing");
        res.status(400).send("User ID is required");
        return;
      }
      const id = req.params.id;
      this.logger.info(id);

      const user = this.userService.getUser(id);
      if (!user) {
        this.logger.warn(`User not found with ID: ${id}`);
        res.status(404).json({
          success: false,
          message: `User with id ${id} not found`,
        });
        return;
      }

      this.logger.info(`User retrieved with ID: ${id}`);
      res.status(200).json({
        success: true,
        message: `Get user with id ${user.id} Successful`,
        data: user,
      });
    } catch (error) {
      this.logger.error(`Error retrieving user: ${error}`);
      res.status(500).json({
        success: false,
        message: "Error during getting user",
      });
    }
  }

  deleteUser(req: Request, res: Response): void {
    try {
      if (!req.params.id) {
        this.logger.warn("User ID parameter is missing for deletion");
        res.status(400).send("User ID is required");
        return;
      }
      const id = req.params.id;

      const deleted = this.userService.deleteUser(id);
      if (!deleted) {
        this.logger.warn(
          `Attempted to delete non-existent user with ID: ${id}`
        );
        res.status(404).json({
          success: false,
          message: `User with id ${id} not found`,
        });
        return;
      }

      this.logger.info(`User deleted with ID: ${id}`);
      res.status(200).json({
        success: true,
        message: `Deleted user with id ${id} Successful`,
      });
    } catch (error) {
      this.logger.error(`Error deleting user: ${error}`);
      res.status(500).json({
        success: false,
        message: "Error during deleting users",
      });
    }
  }

  updateUser(req: Request, res: Response): void {
    try {
      if (!req.params.id) {
        this.logger.warn("User ID parameter is missing for update");
        res.status(400).send("User ID is required");
        return;
      }
      const id = req.params.id;

      const userExists = this.userService.getUser(id);
      if (!userExists) {
        this.logger.warn(
          `Attempted to update non-existent user with ID: ${id}`
        );
        res.status(404).json({
          success: false,
          message: `User with id ${id} not found`,
        });
        return;
      }

      const updatedUser: Omit<User, "id"> = req.body;
      const user = this.userService.updateUser(req.params.id, updatedUser);

      this.logger.info(`User updated with ID: ${req.params.id}`);
      res.status(200).json({
        success: true,
        message: `Updated user with id ${user?.id} Successful`,
      });
    } catch (error) {
      this.logger.error(`Error updating user: ${error}`);
      res.status(500).json({
        success: false,
        message: "Error during updating users",
      });
    }
  }
}

export const userController = new UserController(new UserService());
