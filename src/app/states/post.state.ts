import { Post } from '../module/post.module';

export interface poststate {
  posts: Post[];
}

export const initialState: poststate = {
  posts: [
    {
      id: '1',
      product: 'Samsung',
      description:
        'Samsung helps you discover a wide range of home electronics with cutting-edge technology including smartphones, tablets, TVs, home appliances and more.',
    },
    {
      id: '2',
      product:'Apple',
      description: 'Discover the innovative world of Apple and shop everything iPhone, iPad, Apple Watch, Mac, and Apple TV',
    },
  ],
};
