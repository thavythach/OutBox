import React from 'react';

import Home from './Home/Home';

export interface IRoute {
  path: string;
  sidebarName: string;
  component: React.ComponentType;
}

const Routes: IRoute[] = [
  {
    path: '/',
    sidebarName: 'Home',
    component: Home
  },
];

export default Routes;