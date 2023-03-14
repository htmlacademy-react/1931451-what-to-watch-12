import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import { AppRouteEnum } from '../../consts';


type FooterProp = {
  isLight?: boolean;
}

export default function Logo({isLight}: FooterProp): JSX.Element {
  const getStyleForNavLink = ({isActive}: {isActive: boolean}) =>
    isActive
      ? { pointerEvents: ('none' as React.CSSProperties['pointerEvents'])}
      : {};

  return (
    <div className="logo">
      <NavLink
        to={AppRouteEnum.Main}
        className={classNames('logo__link', {
          'logo__link--light': isLight
        })}
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
