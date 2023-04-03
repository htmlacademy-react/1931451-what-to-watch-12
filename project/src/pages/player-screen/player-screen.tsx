import { Helmet } from 'react-helmet-async';
import { FilmType } from '../../types/film.type';
import { useParams } from 'react-router-dom';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import { getModifiedRunTime } from '../../utils/utils';

type PlayerScreenProps = {
  films: FilmType[];
}

export default function PlayerScreen({films}: PlayerScreenProps): JSX.Element {
  const params = useParams();
  const film = films.find((data) => String(data.id) === params.id);

  return film ? (
    <div className="player">
      <Helmet>
        <title>WTW: Смотреть фильм {film.name} онлайн</title>
      </Helmet>
      <video src={film.videoLink} className="player__video" poster={film.backgroundImage}></video>

      {/* FIXME: Сделать выход из плеера */}
      <button type="button" className="player__exit">Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value="0" max="100"></progress>
            <div className="player__toggler" style={{left: '0%'}}>Toggler</div>
          </div>
          <div className="player__time-value">{getModifiedRunTime(film.runTime)}</div>
        </div>

        <div className="player__controls-row">
          <button type="button" className="player__play">
            <svg viewBox="0 0 19 19" width="19" height="19">
              <use xlinkHref="#play-s"></use>
            </svg>
            <span>Play</span>
          </button>
          <div className="player__name">Transpotting</div>

          <button type="button" className="player__full-screen">
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  ) : <NotFoundScreen />;
}
