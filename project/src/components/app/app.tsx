import { PromoFilm } from '../..';
import MainScreen from '../../pages/main-screen/main-screen';

type AppProp = {
  promoFilm: typeof PromoFilm;
}

function App({promoFilm}: AppProp): JSX.Element {
  return (
    <MainScreen
      promoFilm = {promoFilm}
    />
  );
}

export default App;
