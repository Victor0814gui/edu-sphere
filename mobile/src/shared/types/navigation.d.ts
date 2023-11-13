

export declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {
      signin: undefined;
      authorization: undefined;
      signup: undefined;
      //user
      Dashboard: undefined;
      Profile: undefined;
      Player: {
        url: string;
        duration: string;
      };
      Room: {
        roomId: string;
      }
      Lessons: undefined;
      Playlistlessons: undefined;
    }
  }
}
