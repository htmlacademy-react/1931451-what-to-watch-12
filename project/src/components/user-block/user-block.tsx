import { Link } from 'react-router-dom';
import { AppRouteEnum } from '../../consts';

export default function UserBlock(): JSX.Element {
  return (
    <ul className="user-block">
      <li className="user-block__item">
        {/* FIXME: Убрать перерисовку когда мы уже находимся на странице mylist */}
        <Link to={AppRouteEnum.MyList} className="user-block__avatar">
          <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
        </Link>
      </li>
      <li className="user-block__item">
        <a href="/#" className="user-block__link">Sign out</a>
      </li>
    </ul>
  );
}
