/**
 * Interface representing a user.
 */
interface IUser {
  /**
   * Unique identifier for the user.
   */
  id: string;

  /**
   * First name of the user.
   */
  firstName: string;

  /**
   * Last name of the user.
   */
  lastName: string;

  /**
   * Email address of the user.
   */
  email: string;

  /**
   * Date and time when the user was created.
   */
  createdAt: Date;

  /**
   * Date and time when the user was last updated.
   */
  updatedAt: Date;
}

export default IUser;
