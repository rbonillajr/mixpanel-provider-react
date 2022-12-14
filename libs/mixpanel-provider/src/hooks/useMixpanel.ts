import { Mixpanel } from 'mixpanel-browser';
import React from 'react';
import {
  MixpanelContextProps,
  MixpanelContext,
} from '../context/MixpanelProvider';

export const useMixpanel = (idUser?: string): Mixpanel => {
  const { analytics }: MixpanelContextProps = React.useContext(MixpanelContext);
  if (idUser) {
    analytics.identify(idUser);
  }
  return analytics;
};
