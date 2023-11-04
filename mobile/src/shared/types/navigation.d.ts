

export declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {
      signin: undefined;
      authorization: undefined;
      signup: undefined;
      //user
      dashboard: undefined;
      profile: undefined;
      player: {
        url: string;
        duration: string;
      };
      room: {
        roomId: string;
      }
      lessons: undefined;
      playlistlessons: undefined;
    }
  }
}
