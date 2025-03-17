import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import styles from './App.module.css';
import ErrorPage from "./pages/ErrorPage.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import Details from "./components/Details.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import ToDoList from "./pages/ToDoList.jsx";

const router = createBrowserRouter([
    {
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <HomePage />
            },
            {
                path: "/:id",
                element: <Details />
            },
            {
                path: "/about-us",
                element: <AboutUs />
            },
            {
                path: "contact-us",
                element: <ContactUs />
            },
            {
                path: "todo",
                element: <ToDoList />
            }
        ]
    },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <div className={styles.wrapper}>
          <RouterProvider router={router}>
              {/*<App />*/}
          </RouterProvider>
      </div>
  </StrictMode>
)
