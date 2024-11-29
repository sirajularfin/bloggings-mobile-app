import { BlogActionConstants } from 'src/context/constants';

import { Dispatch } from 'react';
import IBlogPost from 'src/models/interfaces/IBlogPost.interface';

export const AddBlogPost = (blog: IBlogPost) => {
  return (dispatch: Dispatch<{ type: BlogActionConstants; payload: IBlogPost }>) => {
    dispatch({ type: BlogActionConstants.ADD_BLOG_POST, payload: blog });
  };
};

export const DeleteBlogPost = (blog: IBlogPost) => {
  return (dispatch: Dispatch<{ type: BlogActionConstants; payload: IBlogPost }>) => {
    dispatch({ type: BlogActionConstants.DELETE_BLOG_POST, payload: blog });
  };
};
