import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { filmsData } from './mocks/films-data';

export const PromoFilm = {
  Name: 'The Grand Budapest Hotel',
  Genre: 'Drama',
  Year: 2014
} as const;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App
      promoFilm = {PromoFilm}
      films = {filmsData}
    />
  </React.StrictMode>,
);
