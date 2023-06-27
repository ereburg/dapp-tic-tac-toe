// declaring .wasm, since TS doesn't support experimental modules
// source: https://github.com/microsoft/TypeScript/issues/31713

import { ReactNode } from 'react';

declare module '*.wasm' {
  const value: string;
  export default value;
}

declare global {
  type BaseComponentProps = {
    children?: ReactNode
    className?: string
  }
  type PickPartial<T, K extends keyof T> = T | Pick<T, K>
}
