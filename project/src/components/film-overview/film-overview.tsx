import { Link, useOutletContext } from 'react-router-dom';
import { AppRouteEnum } from '../../consts';
import { FilmType } from '../../types/film.type';
import { getTextFilmScore } from '../../utils/utils';

export default function FilmOverview(): JSX.Element {
  const [film]: [FilmType] = useOutletContext();

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          <li className="film-nav__item film-nav__item--active">
            <Link to='#' className="film-nav__link active">
              Overview
            </Link>
          </li>
          <li className="film-nav__item">
            <Link to={AppRouteEnum.FilmDetails} className="film-nav__link">
              Details
            </Link>
          </li>
          <li className="film-nav__item">
            <Link to={AppRouteEnum.FilmReviews} className="film-nav__link">
              Reviews
            </Link>
          </li>
        </ul>
      </nav>

      <div className="film-rating">
        <div className="film-rating__score">{film.rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">
            {getTextFilmScore(film.rating)}
          </span>
          <span className="film-rating__count">{film.scoresCount}</span>
        </p>
      </div>

      <div className="film-card__text">
        <p>{film.description}</p>

        <p className="film-card__director">
          <strong>{film.director}</strong>
        </p>

        <p className="film-card__starring">
          <strong>Starring: {film.starring.join(' ')} and other</strong>
        </p>
      </div>
    </div>
  );
}
