import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Footer from '../../components/footer/footer';
import Logo from '../../components/logo/logo';
import { AppRouteEnum } from '../../types/app-route.enum';

export default function NotFoundScreen(): JSX.Element {
  return (
    <div className="user-page">
      <Helmet>
        <title>WTW: Страница не найдена</title>
      </Helmet>
      <header className="page-header">
        <Logo />
      </header>

      <div className="user-page__content" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
        <h2 style={{fontSize: '6rem', marginBottom: '.4em', letterSpacing: '.05em'}}>404</h2>
        <p style={{fontSize: '3rem', marginBottom: '2em'}}>Page not found</p>
        <Link to={AppRouteEnum.Main} className='user-block__link' style={{fontSize: '1em', textDecoration: 'underline'}}>Go to Home Page</Link>
      </div>

      <Footer />
    </div>
  );
}
