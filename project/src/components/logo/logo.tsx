import { NavLink } from 'react-router-dom';
import { AppRouteEnum } from '../../types/app-route.enum';

type FooterProp = {
  isFooter?: boolean;
}

export default function Logo({isFooter}: FooterProp): JSX.Element {
  const getStyleForNavLink = ({isActive}: {isActive: boolean}) =>
    isActive
      ? { pointerEvents: ('none' as React.CSSProperties['pointerEvents'])}
      : {};

  return (
    <div className="logo">
      <NavLink
        to={AppRouteEnum.Main}
        className={isFooter ? 'logo__link logo__link--light' : 'logo__link'}
        style={getStyleForNavLink}
        end
      >
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </NavLink>
    </div>
  );
}
