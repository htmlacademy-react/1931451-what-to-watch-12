import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Footer from '../../components/footer/footer';
import Logo from '../../components/logo/logo';
import { AppRouteEnum } from '../../consts';

export default function NotFoundScreen(): JSX.Element {
  return (
    <div className="user-page">
      <Helmet>
        <title>WTW: Страница не найдена</title>
      </Helmet>
      <header className="page-header">
        <Logo />
      </header>

      <div className='user-page__content not-found-screen__container'>
        <h2 className='not-found-screen__title'>404</h2>
        <p className='not-found-screen__desc '>Page not found</p>
        <Link to={AppRouteEnum.Main} className='user-block__link not-found-screen__btn'>Go to Home Page</Link>
      </div>

      <Footer />
    </div>
  );
}
