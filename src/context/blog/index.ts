import BlogReducer, { initialState } from './blogReducer';
import { AddBlogPost } from './blogAction';
import createAppContext  from '../index';

export const { Context, Provider } = createAppContext(BlogReducer, { AddBlogPost }, initialState);
