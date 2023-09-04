import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { BookingPage } from './pages/BookingPage';
import { PaymentPage } from './pages/PaymentPage';
import { CreateAccountPage } from './pages/CreateAccountPage';
import { LoginAccountPage } from './pages/LoginAccountPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([{
  path: "/",
  element: <App />,
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
  ]
}]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
