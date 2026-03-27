export type RootStackParamList = {
  Auth: undefined;
  App: undefined;
};

export type AuthStackParamList = {
  Login: undefined;
  Signup: undefined;
};
export type AppDrawerParamList = {
  MainTabs: undefined;
  Settings: undefined;
};

export type TabParamList = {
  Home: undefined;
  Feed: undefined;
  Profile: undefined;
};

export type FeedStackParamList = {
  FeedList: undefined;
  FeedDetail: { id: string };
};
