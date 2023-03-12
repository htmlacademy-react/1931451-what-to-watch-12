import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PromoFilm } from '../..';
import AddReviewScreen from '../../pages/add-review-screen/add-review-screen';
import FilmScreen from '../../pages/film-screen/film-screen';
import MainScreen from '../../pages/main-screen/main-screen';
import MyListScreen from '../../pages/my-list-screen/my-list-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import PlayerScreen from '../../pages/player-screen/player-screen';
import SignInScreen from '../../pages/sign-in-screen/sign-in-screen';
import { AppRouteEnum } from '../../types/app-route.enum';
import { AuthorizationStatusEnum } from '../../types/authorization-status.enum';
import PrivateRoute from '../private-route/private-route';

type AppProp = {
  promoFilm: typeof PromoFilm;
}

function App({promoFilm}: AppProp): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRouteEnum.Main}
            element={
              <MainScreen
                promoFilm = {promoFilm}
              />
            }
          />
          <Route path={AppRouteEnum.SignIn} element={<SignInScreen />} />
          <Route path={AppRouteEnum.Player} element={<PlayerScreen />} />
          <Route path={AppRouteEnum.Film} element={<FilmScreen />} />
          <Route path={AppRouteEnum.AddReview} element={<AddReviewScreen />} />
          <Route
            path={AppRouteEnum.MyList}
            element={
              <PrivateRoute authorizationStatus={AuthorizationStatusEnum.NoAuth}>
                <MyListScreen />
              </PrivateRoute>
            }
          />
          <Route path='*' element={<NotFoundScreen />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
