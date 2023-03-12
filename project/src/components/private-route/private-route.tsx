import { Navigate } from 'react-router-dom';
import { AppRouteEnum } from '../../types/app-route.enum';
import { AuthorizationStatusEnum } from '../../types/authorization-status.enum';

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
