import IUser from './IUser.interface';

/**
 * Interface representing a blog post.
 */
interface IBlogPost {
  /**
   * Unique identifier for the blog post.
   */
  id: string;

  /**
   * Title of the blog post.
   */
  title: string;

  /**
   * Content of the blog post.
   */
  content: string;

  /**
   * Date and time when the blog post was created.
   */
  createdAt: Date;

  /**
   * Date and time when the blog post was last updated.
   */
  updatedAt: Date;

  /**
   * Identifier of the user who created the blog post.
   */
  createdBy: IUser;

  /**
   * Identifier of the user who last updated the blog post.
   */
  updatedBy: string;
}

export default IBlogPost;
