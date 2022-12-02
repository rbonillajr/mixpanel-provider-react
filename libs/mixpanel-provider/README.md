# mixpanel-provider

Mixpanel provider for reactjs

## Installation

Install the package

### npm
```
npm install --save mixpanel-provider-react
```

### yarn
```
yarn add mixpanel-provider-react
```

## How to use

Provider
```
import React from 'react';
import { MixpanelProvider } from 'mixpanel-provider-react';

const App = (props) => (
  <MixpanelProvider apiKey={apiKey}>
    ...
  </MixpanelProvider>
);
```

Send data with hook
```
import { useMixpanel } from 'mixpanel-provider-react';

const component = () => {
    const mixpanel = useMixpanel('identity');

    mixpanel.track('event', {
          value         
        });
}
```

## Running unit tests

Run `yarn test mixpanel-provider` to execute the unit tests via [Jest](https://jestjs.io).
