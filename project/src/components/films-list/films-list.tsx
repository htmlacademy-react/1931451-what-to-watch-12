import { FilmType } from '../../types/film.type';
import FilmCard from '../film-card/film-card';
import { MIN_FILMS_LIST_LENGTH } from './films-list.const';

type FilmsListProps = {
  films: FilmType[];
  maxLength: number;
};

export default function FilmsList({ films, maxLength }: FilmsListProps): JSX.Element {
  return (
    <div className="catalog__films-list">
      {films
        .slice(MIN_FILMS_LIST_LENGTH, maxLength)
        .map((film) => (
          <FilmCard
            film={film}
            key={`${film.id}-${film.name}`}
          />
        ))}
    </div>
  );
}
