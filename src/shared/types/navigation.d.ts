

export declare global {
  namespace ReactNavigation {
      interface RootParamList extends RootStackParamList{
        dashboard: undefined;
        profile: undefined;
        question: {
          questionId: string;
        }
        signin: undefined
        signupstepone: undefined
        signupsteptwo: undefined
        signinstepthree: undefined
      }
  }
}
