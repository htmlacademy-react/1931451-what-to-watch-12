import { Helmet } from 'react-helmet-async';
import Footer from '../../components/footer/footer';
import Logo from '../../components/logo/logo';
import { ChangeEvent, useState } from 'react';

export default function SignInScreen(): JSX.Element {
  const [formData, setformData] = useState({
    email: '',
    password: '',
  });

  const fieldChangeHandler = (
    evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = evt.target;
    setformData({ ...formData, [name]: value });
  };

  return (
    <div className="user-page">
      <Helmet>
        <title>WTW: Аторизацию пользователя</title>
      </Helmet>
      <header className="page-header user-page__head">
        <Logo />

        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <div className="sign-in user-page__content">
        <form
          action="#"
          className="sign-in__form"
          onSubmit={(evt) => evt.preventDefault()}
        >
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input
                className="sign-in__input"
                type="email"
                placeholder="Email address"
                name="email"
                id="email"
                onChange={fieldChangeHandler}
              />
              <label className="sign-in__label visually-hidden" htmlFor="email">
                Email address
              </label>
            </div>
            <div className="sign-in__field">
              <input
                className="sign-in__input"
                type="password"
                placeholder="Password"
                name="password"
                id="password"
                onChange={fieldChangeHandler}
              />
              <label
                className="sign-in__label visually-hidden"
                htmlFor="password"
              >
                Password
              </label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit">
              Sign in
            </button>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
}
