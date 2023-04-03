import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import { AppRouteEnum } from '../../consts';

type FooterProps = {
  isLight?: boolean;
};

export default function Logo({ isLight }: FooterProps): JSX.Element {
  const getClassForNavLink = ({ isActive }: { isActive: boolean }) => isActive;
  const logoClass = classNames({
    'logo__link': true,
    'logo__link--light': isLight,
    ...getClassForNavLink
  });

  return (
    <div className="logo">
      <NavLink to={AppRouteEnum.Main} className={logoClass} end>
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </NavLink>
    </div>
  );
}
