import { useSyncExternalStore } from "react";

// An empty subscribe function since the client state never changes after mount
const emptySubscribe = () => () => {};

export function useIsClient() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,  // getSnapshot: What the client sees
    () => false  // getServerSnapshot: What the server sees during SSR
  );
}