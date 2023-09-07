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
import { SeeAllPage } from './pages/SeeAllPage';
import { Transaction } from './pages/Transaction';
import GcashPayment from './pages/GcashPayment';
import GcashReceipt from './pages/GcashReceipt';
import BankTransfer from './pages/BankTransfer';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/booking",
    element: <BookingPage />,

  },
  {
    path: "/payment",
    element: <PaymentPage />,

  },
  {
    path: "/createAccount",
    element: <CreateAccountPage />,

  },
  {
    path: "/login",
    element: <LoginAccountPage />,

  },
  {
    path: "/about",
    element: <AboutPage />,

  },
  {
    path: "/movieDetail",
    element: <MovieDetailPage />
  },
  {
    path: "/seeAll",
    element: <SeeAllPage />
  },
  {
    path: "/transaction",
    element: <Transaction />
  },

  {
    path: "/gcash",
    element: <GcashPayment />
  },
  {
    path: "/gcashReceipt",
    element: <GcashReceipt />
  },
  {
    path: "/bankTransfer",
    element: <BankTransfer />
  },
]);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
