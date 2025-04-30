declare module '*.png' {
    const value: string;
    export default value;
  }

  declare module "*.svg" {
    import * as React from 'react';
    import { SvgProps } from 'react-native-svg';
    const content: React.FC<SvgProps>;
    export default content;
  }
  