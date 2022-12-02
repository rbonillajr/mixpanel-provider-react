import React from 'react';
import { render } from '@testing-library/react';
import { MixpanelProvider } from '../MixpanelProvider';

describe('Mixpanel provider', () => {
  it('Should create the instance of provide', () => {
    const { container } = render(
      <MixpanelProvider apiKey="apiKey">
        <div />
      </MixpanelProvider>
    );

    expect(container).toBeDefined();
  });
});
