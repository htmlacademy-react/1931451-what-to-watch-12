import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PromoFilm } from '../../index';
import AddReviewScreen from '../../pages/add-review-screen/add-review-screen';
import FilmScreen from '../../pages/film-screen/film-screen';
import MainScreen from '../../pages/main-screen/main-screen';
import MyListScreen from '../../pages/my-list-screen/my-list-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import PlayerScreen from '../../pages/player-screen/player-screen';
import SignInScreen from '../../pages/sign-in-screen/sign-in-screen';
import { AppRouteEnum, AuthorizationStatusEnum } from '../../consts';
import PrivateRoute from '../private-route/private-route';
import { filmsData } from '../../mocks/films-data';
import { FilmType } from '../../types/film.type';
import FilmOverview from '../film-overview/film-overview';
import FilmDetails from '../film-details/film-details';
import FilmReviews from '../film-reviews/film-reviews';
import ScrollToTop from '../scroll-to-top/scroll-to-top';

type AppProp = {
  promoFilm: typeof PromoFilm;
  films: FilmType[];
};

function App({ promoFilm, films }: AppProp): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route
            path={AppRouteEnum.Main}
            element={<MainScreen promoFilm={promoFilm} films={films} />}
          />
          <Route path={AppRouteEnum.SignIn} element={<SignInScreen />} />
          <Route
            path={AppRouteEnum.Player}
            element={<PlayerScreen films={films} />}
          />
          <Route
            path={AppRouteEnum.Film}
            element={<FilmScreen films={filmsData} />}
          >
            <Route index element={<FilmOverview />} />
            <Route path={AppRouteEnum.FilmDetails} element={<FilmDetails />} />
            <Route path={AppRouteEnum.FilmReviews} element={<FilmReviews />} />
          </Route>
          <Route
            path={AppRouteEnum.AddReview}
            element={
              <PrivateRoute
                authorizationStatus={AuthorizationStatusEnum.Auth}
              >
                <AddReviewScreen films={films} />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRouteEnum.MyList}
            element={
              <PrivateRoute
                authorizationStatus={AuthorizationStatusEnum.Auth}
              >
                <MyListScreen films={films} />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<NotFoundScreen />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
