import IBlogPost from 'src/models/interfaces/IBlogPost.interface';
import { BlogActionConstants } from 'src/context/constants';

interface IBlogState {
  blogs: IBlogPost[];
}

export const initialState: IBlogState = {
  blogs: [],
};

const BlogReducer = (state: IBlogState = initialState, action: any) => {
  switch (action.type) {
    case BlogActionConstants.ADD_BLOG_POST:
      return {
        ...state,
        blogs: [...state.blogs, action.payload],
      };
    case BlogActionConstants.DELETE_BLOG_POST:
      return {
        ...state,
        blogs: state.blogs.filter(blog => blog.id !== action.payload),
      };
    default:
      return state;
  }
};

export default BlogReducer;
