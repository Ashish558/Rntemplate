export type RootStackParamList = {
  Auth: undefined;
  App: undefined;
};

//auth
export type AuthStackParamList = {
  Login: undefined;
  Signup: undefined;
};

//logged im user
export type AppDrawerParamList = {
  MainTabs: undefined;
  Settings: undefined;
};

export type TabParamList = {
  Home: undefined;
  Feed: undefined;
  Profile: undefined;
};


//feed
export type FeedStackParamList = {
  FeedList: undefined;
  FeedDetail: { id: string };
};

//chat
export type ChatStackParamList = {
  ChatList: undefined;
  ChatScreen: { id: string };
};
