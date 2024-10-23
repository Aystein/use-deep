# use-deep

`use-deep` is a React hook library that provides deep-equality versions of `useEffect`, `useCallback`, and `useMemo`, ensuring accurate dependency comparison for complex or deeply nested data structures.

## Features

- Deep comparison of dependencies to prevent unnecessary re-renders and side-effects.
- Provides alternatives to React's `useEffect`, `useCallback`, and `useMemo` with deep equality checks.

## Installation

Install the package via npm or yarn:

```bash
yarn add use-deep
```

## API & Usage

```ts
import { useDeepEffect, useDeepCallback, useDeepMemo } from 'use-deep';
```

```ts
function Component() {
    useDeepEffect(() => {
        // ...
    }, deps);

    const memoizedValue = useDeepMemo(() => {
        // ...
    }, deps)

    const callback = useDeepCallback((a: number, b: number) => {
        return a + b;
    }, deps)
}
```