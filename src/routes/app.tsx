import { AppLayout } from '@/layouts/app.tsx';
import { Home } from '@/pages/home.tsx';
import type { RouteObject } from 'react-router';

export const appRoutes: RouteObject[] = [
  {
    Component: AppLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
    ],
  },
];
