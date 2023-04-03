import { Link, useOutletContext } from 'react-router-dom';
import { AppRouteEnum } from '../../consts';
import { CommentType } from '../../types/comment.type';

const renderCol = (array: CommentType[]): JSX.Element[] =>
  array.map((obj, id) => {
    const { comment, user, date, rating } = obj;
    const keyValue = `${id}-${user.name}`;
    const parseDate = new Date(date);
    const month = parseDate.toLocaleString('en-GB', { month: 'long' });
    const day = parseDate.getDay();
    const year = parseDate.getFullYear();

    return (
      <div className="review" key={keyValue}>
        <blockquote className="review__quote">
          <p className="review__text">{comment}</p>

          <footer className="review__details">
            <cite className="review__author">{user.name}</cite>
            <time className="review__date" dateTime={date}>
              {month} {day}, {year}
            </time>
          </footer>
        </blockquote>

        <div className="review__rating">{rating.toFixed(1)}</div>
      </div>
    );
  });

export default function FilmReviews(): JSX.Element {
  const [, filmComment]: [unknown, CommentType[]] = useOutletContext();
  const lengthReviews = filmComment?.length;
  const firstArray = filmComment?.slice(0, lengthReviews / 2);
  const secondArray = filmComment?.slice(lengthReviews / 2, lengthReviews);

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          <li className="film-nav__item">
            <Link to={'../'} className="film-nav__link">
              Overview
            </Link>
          </li>
          <li className="film-nav__item">
            <Link
              to={`../${AppRouteEnum.FilmDetails}`}
              className="film-nav__link"
            >
              Details
            </Link>
          </li>
          <li className="film-nav__item film-nav__item--active">
            <Link to="#" className="film-nav__link active">
              Reviews
            </Link>
          </li>
        </ul>
      </nav>

      <div className="film-card__reviews film-card__row">
        <div className="film-card__reviews-col">
          {renderCol(firstArray)}
        </div>
        <div className="film-card__reviews-col">
          {renderCol(secondArray)}
        </div>
      </div>
    </div>
  );
}
