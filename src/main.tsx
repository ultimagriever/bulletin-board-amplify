import '@/index.css';
import { appRoutes } from '@/routes/app.tsx';
import { Amplify } from 'aws-amplify';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';
import outputs from '../amplify_outputs.json';

Amplify.configure(outputs);

const router = createBrowserRouter([...appRoutes]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
