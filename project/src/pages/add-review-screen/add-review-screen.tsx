import { Helmet } from 'react-helmet-async';
import Logo from '../../components/logo/logo';
import UserBlock from '../../components/user-block/user-block';
import { FilmType } from '../../types/film.type';
import { Link, useParams } from 'react-router-dom';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import { AppRouteEnum } from '../../consts';
import { ratingArray } from './add-review-screen.const';
import { ChangeEvent, Fragment, useState } from 'react';

type AddReviewScreenProps = {
  films: FilmType[];
};

export default function AddReviewScreen({
  films,
}: AddReviewScreenProps): JSX.Element {
  const [formData, setformData] = useState({
    rating: 0,
    reviewText: '',
  });
  const params = useParams();
  const film = films.find((data) => String(data.id) === params.id);

  const fieldChangeHandler = (
    evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = evt.target;
    setformData({ ...formData, [name]: value });
  };

  return film ? (
    <section className="film-card film-card--full">
      <Helmet>
        <title>WTW: Оставить отзыв</title>
      </Helmet>
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={film.backgroundImage} alt={film.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <Logo />

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link
                  to={AppRouteEnum.Film.replace(':id', `${film.id}`)}
                  className="breadcrumbs__link"
                >
                  {film.name}
                </Link>
              </li>
              <li className="breadcrumbs__item">
                <div className="breadcrumbs__link active">Add review</div>
              </li>
            </ul>
          </nav>

          <UserBlock />
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img
            src={film.posterImage}
            alt={film.name}
            width="218"
            height="327"
          />
        </div>
      </div>

      <div className="add-review">
        <form
          action="#"
          className="add-review__form"
          onSubmit={(evt) => evt.preventDefault()}
        >
          <div className="rating">
            <div className="rating__stars">
              {ratingArray.map((value) => (
                <Fragment key={value}>
                  <input
                    className="rating__input"
                    id={`star-${value}`}
                    type="radio"
                    name="rating"
                    value={value}
                    onChange={fieldChangeHandler}
                  />
                  <label className="rating__label" htmlFor={`star-${value}`}>
                    Rating {value}
                  </label>
                </Fragment>
              ))}
            </div>
          </div>

          <div className="add-review__text">
            <textarea
              className="add-review__textarea"
              name="reviewText"
              id="reviewText"
              placeholder="Review text"
              onChange={fieldChangeHandler}
            >
            </textarea>
            <div className="add-review__submit">
              <button className="add-review__btn" type="submit">
                Post
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  ) : (
    <NotFoundScreen />
  );
}
