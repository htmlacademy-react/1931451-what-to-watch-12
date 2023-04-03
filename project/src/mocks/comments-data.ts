import { CommentType } from '../types/comment.type';

export const commentsData: CommentType[] = [
  {
    id: 1,
    user: {
      id: 1,
      name: 'Rachel',
    },
    rating: 6.8,
    comment: 'The editing is a mess, and the transitions of the plot or characters are rather strange. There is no narrative focus and the storytelling is unbalanced. I cannot really understand why such a bad movie received an overwhelming approval from the critics. ',
    date: '2023-03-08T07:31:25.015Z',
  },
  {
    id: 1,
    user: {
      id: 2,
      name: 'Joey',
    },
    rating: 7.1,
    comment: 'Unfortunately we don\'t have a reliable way to tell the true ratings of a movie.',
    date: '2023-02-11T07:31:25.015Z',
  },
  {
    id: 3,
    user: {
      id: 2,
      name: 'Joey',
    },
    rating: 8.1,
    comment: 'I personally found this movie to be boring. Definitely one of the most boring movies I\'ve ever seen.',
    date: '2023-03-04T07:31:25.015Z',
  },
  {
    id: 3,
    user: {
      id: 1,
      name: 'Rachel',
    },
    rating: 7.3,
    comment: 'Like',
    date: '2023-03-04T07:31:25.015Z',
  },
  {
    id: 2,
    user: {
      id: 2,
      name: 'Joey',
    },
    rating: 5.2,
    comment: 'Don\'t like',
    date: '2023-03-04T07:31:25.015Z',
  },
];
