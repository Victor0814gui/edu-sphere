/**
 * @format
 */

import React from 'react';
import { View } from 'react-native';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';


function Component(){
  return <View/>
}

it('renders correctly', () => {
  renderer.create(<Component />);
});
