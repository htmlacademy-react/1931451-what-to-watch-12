import FilmCard from '../film-card/film-card';

const MAX_FILMS_RENDER = 20;
const getUniqueKey = (): string => `${new Date().getMilliseconds() * Math.random()}`; // это временное решение

export default function FilmsList(): JSX.Element {
  return (
    <div className="catalog__films-list">
      {[...Array(MAX_FILMS_RENDER) as undefined[]].map((_film) => <FilmCard key={getUniqueKey()} />)}
    </div>
  );
}
