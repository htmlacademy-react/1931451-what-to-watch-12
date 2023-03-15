export enum AppRouteEnum {
  Main = '/',
  SignIn = '/login',
  MyList = '/mylist',
  Film = 'films/:id',
  AddReview = 'films/:id/review',
  Player= '/player/:id'
}

export enum AuthorizationStatusEnum {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}
