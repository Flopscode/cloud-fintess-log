import React from 'react';
import WeightLogPage from './pages/WeightLogPage';
import { IntlProvider } from 'react-intl';

import { ThemeProvider } from '@material-ui/core';
import RootTheme from './themes/root';

// TODO cldr-core, 'cldr-numbers-full and cldr-dates-full required?
// import likelySubtags from 'cldr-core/supplemental/likelySubtags.json'
// import currencyData from 'cldr-core/supplemental/currencyData.json'
// import weekData from 'cldr-core/supplemental/weekData.json'
// import localCurrency from 'cldr-numbers-full/main/de/currencies.json'
// import numbers from 'cldr-numbers-full/main/de/numbers.json'
// import caGregorian from 'cldr-dates-full/main/de/ca-gregorian.json'
// import dateFields from 'cldr-dates-full/main/de/dateFields.json'

import './App.css';

function App() {
  return (
    <>
      <IntlProvider
        locale={'de-DE'}
      >
          <ThemeProvider theme={RootTheme}>
              <WeightLogPage />
          </ThemeProvider>
      </IntlProvider>
    </>
  );
}

export default App;
