import { useMemo, useRef } from "react";
import equal from 'fast-deep-equal';

export function useDeep<T>(value: T) {
    const ref = useRef<T>(value);
    const toggleRef = useRef(false);

    if (!equal(value, ref.current)) {
      ref.current = value;
      toggleRef.current = !toggleRef.current;
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    return useMemo(() => ref.current, [toggleRef.current]);
}