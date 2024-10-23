import { useCallback } from "react";
import { useDeep } from "./useDeep";

// function useCallback<T extends Function>(callback: T, deps: DependencyList): T;

export function useDeepCallback<T extends Function>(callback: T, deps: React.DependencyList) {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    return useCallback(callback, useDeep(deps));
}