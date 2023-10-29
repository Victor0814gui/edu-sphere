import { makeExample } from "./lottie-sample";

export const Animations = {
  Message: makeExample('Message', () =>
    require('../assets/animations/Message.json'),
  ),
  Offline: makeExample('Offline', () =>
    require('../assets/animations/Offline.json'),
  ),
  Welcome: makeExample('Welcome', () =>
    require('../assets/animations/Offline.json'),
  ),
  NotFound: makeExample('Not Found', () =>
    require('../assets/animations/Page-Not-Found.json'),
  ),
  Lock: makeExample('Lock', () =>
    require('../assets/animations/Lock.json'),
  ),
}