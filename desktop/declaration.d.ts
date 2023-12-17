import { ImageSourcePropType } from 'react-native';

declare module "*.svg" {
  import React from 'react';
  import { SvgProps } from "react-native-svg";
  const content: JSX.Element<SvgProps> | ImageSourcePropType;
  export default content;
}

declare module "*.gif" { }
declare module "*.png" { }


// globalMethods.d.ts
declare global {
  interface ViewProps {
    onMouseEnter: (e: any) => Promise<void>;
    onMouseLeave: (e: any) => Promise<void>;
    // Adicione outros métodos conforme necessário para o componente
  }
}
