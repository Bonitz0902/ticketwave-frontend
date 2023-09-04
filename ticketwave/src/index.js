import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from "./app/store.js";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { BookingPage } from './pages/BookingPage';
import { PaymentPage } from './pages/PaymentPage';
import { CreateAccountPage } from './pages/CreateAccountPage';
import { LoginAccountPage } from './pages/LoginAccountPage';
import { MovieDetailPage } from './pages/MovieDetailPage';
import { AboutPage } from './pages/AboutPage';
import { ErrorPage } from './pages/ErrorPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([{
  path: "/",
  element: <App />,
  errorElement: <ErrorPage />,
  children: [
    {
      path: "/booking", element: <BookingPage />
    },
    {
      path: "/payment", element: <PaymentPage />
    },
    {
      path: "/createAccount", element: <CreateAccountPage />
    },
    {
      path: "/login", element: <LoginAccountPage />
    },
    {
      path: "/movieDetail", element: <MovieDetailPage />
    },
    {
      path: "/about", element: <AboutPage />
    },
  ]
}]);

root.render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
        <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
