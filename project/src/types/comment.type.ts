import { UserShortType } from './user.type';

export type CommentType = {
  comment: string;
  date: string;
  id: number;
  rating: number;
  user: UserShortType;
}
