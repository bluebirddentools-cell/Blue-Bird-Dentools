import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MotionConfig } from 'framer-motion';
import Layout from './components/Layout';
import Home from './pages/Home';

// Route-level `lazy`: the router waits for the chunk before switching pages, so no blank Suspense flash.
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    // Initial load of a lazy route renders nothing until its chunk arrives (no SSR); silences the dev warning.
    HydrateFallback: () => null,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'products',
        lazy: async () => ({ Component: (await import('./pages/Products')).default }),
      },
      {
        path: 'services',
        lazy: async () => ({ Component: (await import('./pages/Services')).default }),
      },
      {
        path: 'about',
        lazy: async () => ({ Component: (await import('./pages/About')).default }),
      },
      {
        path: 'contact',
        lazy: async () => ({ Component: (await import('./pages/Contact')).default }),
      },
      {
        path: '*',
        element: <Home />, // Fallback to Home for safety
      }
    ],
  },
]);

const App: React.FC = () => {
  return (
    <MotionConfig reducedMotion="user">
      <RouterProvider router={router} />
    </MotionConfig>
  );
};

export default App;
