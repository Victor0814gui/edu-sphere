import { ImageSourcePropType } from 'react-native';

declare module "*.svg" {
  import React from 'react';
  import { SvgProps } from "react-native-svg";
  const content: JSX.Element<SvgProps> | ImageSourcePropType;
  export default content;
}

declare module "*.gif" { }
declare module "*.png" { }