import type { MetaFunction } from '@remix-run/node';

import { Chart } from '../components/Chart.client';

export const meta: MetaFunction = () => {
  return [
    { title: 'Organisation Chart' },
    {
      name: 'description',
      content: 'Display an accessible organisational chart on any website',
    },
  ];
};

export default function Index() {
  return <Chart />;
}
