import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';
import { Container } from './components/ui/Container/Container';
import { Header } from './components/ui/Header/Header';

/* import classes from './root.module.css'; */
import { Heading, Spinner } from '@digdir/designsystemet-react';
import { Footer } from './components/ui/Footer/Footer';

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1'
        />
        <link
          rel='stylesheet'
          href='/root.css'
        />
        <Meta />
        <Links />
      </head>
      <body>
        <Header />
        <Container
          style={{
            minHeight: 'calc(100vh - 100px)',
            marginTop: 'var(--fds-spacing-4)',
            marginBottom: 'var(--fds-spacing-4)',
          }}
        >
          {children}
        </Container>
        <Footer>
          <Footer.Column>
            <Heading
              level={2}
              size='small'
            >
              Åpningstider
            </Heading>
          </Footer.Column>
          <Footer.Column>
            <Heading
              level={2}
              size='small'
            >
              E-post
            </Heading>
          </Footer.Column>
          <Footer.Column>
            <Heading
              level={2}
              size='small'
            >
              Viktige lenker
            </Heading>
          </Footer.Column>
          <Footer.Bottom>
            Tjenesten er levert av Digitaliseringsdirektoratet
          </Footer.Bottom>
        </Footer>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function HydrateFallback() {
  return (
    <div>
      <Spinner title='loading content' />
    </div>
  );
}
