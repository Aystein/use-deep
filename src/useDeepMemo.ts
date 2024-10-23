import { useMemo } from "react";
import { useDeep } from "./useDeep";

// function useMemo<T>(factory: () => T, deps: DependencyList): T;

export function useDeepMemo<T>(factory: () => T, deps: React.DependencyList) {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    return useMemo(factory, useDeep(deps));
}