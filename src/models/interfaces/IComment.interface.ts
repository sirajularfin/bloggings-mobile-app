interface IComment {
  /**
   * Unique identifier for the comment.
   */
  id: string;

  /**
   * Unique identifier for the blog post.
   */
  blogId: string;

  /**
   * Comment content.
   */
  content: string;

  /**
   * Date and time when the comment was created.
   */
  createdAt: Date;

  /**
   * Date and time when the comment was last updated.
   */
  updatedAt: Date;

  /**
   * Unique identifier for the user who created the comment.
   */
  userId: string;
}

export default IComment;
