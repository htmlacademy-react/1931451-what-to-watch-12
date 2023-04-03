import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppRouteEnum } from '../../consts';
import { FilmType } from '../../types/film.type';

type FilmCardProps = {
  film: FilmType;
}

export default function FilmCard({ film }: FilmCardProps): JSX.Element {
  const [activeId, setActiveId] = useState<number | null>(null);

  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseEnter={() => setActiveId(film.id)}
    >
      <div className="small-film-card__image">
        <img
          src={film.previewImage}
          alt={film.name}
          width="280"
          height="175"
        />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={AppRouteEnum.Film.replace(':id', `${film.id}`)}>
          {film.name}
        </Link>
      </h3>
    </article>
  );
}
