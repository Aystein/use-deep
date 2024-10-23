import { useEffect } from "react";
import { useDeep } from "./useDeep";

// function useEffect(effect: EffectCallback, deps?: DependencyList): void;

export function useDeepEffect(effect: React.EffectCallback, deps: React.DependencyList) {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    return useEffect(effect, useDeep(deps));
}