import type { MetaFunction } from '@remix-run/node';
import { Button } from '@digdir/designsystemet-react';

import { Chart } from '../components/Chart.client';
import { Suspense } from 'react';

export const meta: MetaFunction = () => {
  return [
    { title: 'Organisation Chart' },
    { name: 'description', content: 'Developed by Digdir' },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.8' }}>
      <Button>Button</Button>
      <h1>Organisation Chart</h1>
      <Suspense>
        <Chart />
      </Suspense>
    </div>
  );
}
