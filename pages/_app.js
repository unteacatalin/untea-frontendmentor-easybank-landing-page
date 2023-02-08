import { ThemeProvider } from '@mui/material/styles';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';

import '../styles/globals.css';
import theme from '../components/ui/theme';
import { EasybankStoreProvider } from '../store/store-context';

export const muiCache = createCache({
  key: 'mui',
  prepend: true,
});

function MyApp({ Component, pageProps }) {
  return (
    <CacheProvider value={muiCache}>
      <ThemeProvider theme={theme}>
        <EasybankStoreProvider>
          <Component {...pageProps} />
        </EasybankStoreProvider>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default MyApp;
