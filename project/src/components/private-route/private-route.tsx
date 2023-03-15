import { Navigate } from 'react-router-dom';
import { AppRouteEnum, AuthorizationStatusEnum } from '../../consts';

type PrivateRouteProps = {
  authorizationStatus: AuthorizationStatusEnum;
  children: JSX.Element;
}

export default function PrivateRoute({authorizationStatus, children}: PrivateRouteProps): JSX.Element {
  return (
    authorizationStatus === AuthorizationStatusEnum.Auth
      ? children
      : <Navigate to={AppRouteEnum.SignIn} />
  );
}
