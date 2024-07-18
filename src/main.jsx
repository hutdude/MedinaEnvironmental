import React, { createContext, useState, useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  useLocation
} from "react-router-dom";
import Root from './routes/root';
import ErrorPage from "./error-page";
import './index.css'
import About from './routes/about'
import Landing from './routes/landing'
import Services from './routes/services';
import Projects from './routes/projects';
import Learn from './routes/learn';
import Coming from './routes/coming';
import { BackgroundProvider } from './BackgroundContext.jsx';

// Create the context
export const PageContext = createContext();

// Create a provider component
function PageProvider({ children }) {
  const [currentPage, setCurrentPage] = useState('');

  return (
    <PageContext.Provider value={{ currentPage, setCurrentPage }}>
      {children}
    </PageContext.Provider>
  );
}

// Scroll to top component
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <ScrollToTop />
        <Root />
      </>
    ),
    errorElement: <ErrorPage />,
    children: [
      { path: "", element: <Landing /> },
      { path: "about", element: <About /> },
      { path: "services", element: <Services /> },
      { path: "projects", element: <Projects /> },
      { path: "learn", element: <Learn /> },
      { path: "coming", element: <Coming /> },
    ]
  },
]);

let root = null;

function render() {
  if (!root) {
    root = ReactDOM.createRoot(document.getElementById("root"));
  }
  root.render(
    <React.StrictMode>
      <BackgroundProvider>
        <PageProvider>
          <RouterProvider router={router} />
        </PageProvider>
      </BackgroundProvider>
    </React.StrictMode>
  );
}

render();

// If you're using hot module replacement (HMR)
if (import.meta.hot) {
  import.meta.hot.accept(() => {
    render();
  });
}