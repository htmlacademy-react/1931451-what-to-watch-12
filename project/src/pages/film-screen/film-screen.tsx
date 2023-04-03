import { Helmet } from 'react-helmet-async';
import { Link, Outlet, useNavigate, useParams } from 'react-router-dom';
import FilmsList from '../../components/films-list/films-list';
import Footer from '../../components/footer/footer';
import Logo from '../../components/logo/logo';
import UserBlock from '../../components/user-block/user-block';
import { AppRouteEnum } from '../../consts';
import { commentsData } from '../../mocks/comments-data';
import { FilmType } from '../../types/film.type';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import { MAX_FILMS_LIST_LENGTH } from './film-screen.const';

type FilmScreenProps = {
  films: FilmType[];
};

export default function FilmScreen({ films }: FilmScreenProps): JSX.Element {
  const params = useParams();
  const navigate = useNavigate();
  const film = films.find((data) => String(data.id) === params.id);
  const filmComment = commentsData.filter((comment) => comment.id === film?.id);

  return film ? (
    <>
      <Helmet>
        <title>WTW: {film.name}</title>
      </Helmet>
      <section className="film-card film-card--full" style={{backgroundColor: film.backgroundColor}}>
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img
              src={film.backgroundImage}
              alt={film.name}
            />
          </div>

          <h1 className="visually-hidden">{film.name}</h1>

          <header className="page-header film-card__head">
            <Logo />

            <UserBlock />
          </header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{film.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{film.genre}</span>
                <span className="film-card__year">{film.released}</span>
              </p>

              <div className="film-card__buttons">
                <button
                  className="btn btn--play film-card__button"
                  type="button"
                  onClick={() => navigate(AppRouteEnum.Player.replace(':id', `${film.id}`))}
                >
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button
                  className="btn btn--list film-card__button"
                  type="button"
                  onClick={() => navigate(AppRouteEnum.MyList.replace(':id', `${film.id}`))}
                >
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">5</span>
                </button>
                <Link
                  to={AppRouteEnum.AddReview.replace(':id', `${film.id}`)}
                  state={{film}}
                  className="btn film-card__button"
                >
                  Add review
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img
                src={film.posterImage}
                alt={film.name}
                width="218"
                height="327"
              />
            </div>
            <Outlet context={[film, filmComment]} />
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <FilmsList
            films = {films}
            maxLength = { MAX_FILMS_LIST_LENGTH }
          />
        </section>
        <Footer />
      </div>
    </>
  ) : (
    <NotFoundScreen />
  );
}
