export type UserType = {
  avatarUrl: string;
  email: string;
  id: number;
  name: string;
}

export type UserShortType = Pick<UserType, 'id' | 'name'>
