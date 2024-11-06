import React from 'react';
import { createBrowserRouter, RouterProvider, Link, useNavigate } from 'react-router-dom';
import MainPage from './features/mainpage/MainPage';
import BlogPage from './features/blog/BlogPage';
import './App.css';

const TopBar: React.FC<{ to: string; label: string }> = ({ to, label }) => {
  const navigate = useNavigate();

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    if (document.startViewTransition) {
      document.startViewTransition(() => {
        navigate(to);
      });
    } else {
      navigate(to);
    }
  };

  return (
    <nav>
      <ul>
        <li>
          <a href={to} onClick={handleClick}>
            {label}
          </a>
        </li>
      </ul>
    </nav>
  );
};

const MainPageWrapper: React.FC = () => (
  <div>
    <TopBar to="/blog" label="Blog" />
    <MainPage />
  </div>
);

const BlogPageWrapper: React.FC = () => (
  <div>
    <TopBar to="/" label="Home" />
    <BlogPage />
  </div>
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPageWrapper />,
  },
  {
    path: '/blog',
    element: <BlogPageWrapper />,
  },
]);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
