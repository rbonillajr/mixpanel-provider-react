import React from 'react';
import mixpanel, { Mixpanel } from 'mixpanel-browser';

type MixpanelProviderProps = {
  apiKey: string;
  children: React.ReactNode | React.ReactNode[] | null;
};
export type MixpanelContextProps = {
  analytics: Mixpanel;
};

export const MixpanelContext = React.createContext<MixpanelContextProps>({
  analytics: mixpanel,
});

export const MixpanelProvider = ({ apiKey, children }: MixpanelProviderProps) => {
  mixpanel.init(apiKey);
  const analytics: Mixpanel = mixpanel;
  return (
    <MixpanelContext.Provider value={{ analytics }}>
      {children}
    </MixpanelContext.Provider>
  );
};
