import { createContext } from "react";

export interface ReducerState {
  destinationIndex: number;
  sourceIndex: number;
}

export type ActionType =
  | { type: "SET_SOURCE_INDEX"; payload: ReducerState["sourceIndex"] }
  | {
      type: "SET_DESTINATION_INDEX";
      payload: ReducerState["destinationIndex"];
    };

export interface AppContextValue {
  $refs: React.MutableRefObject<Map<string, HTMLElement>>;
  dispatch: React.Dispatch<ActionType>;
  store: ReducerState;
  onDragEnd: () => void;
}

export const AppContext = createContext<AppContextValue>({
  $refs: { current: new Map() },
  dispatch: () => {},
  onDragEnd: () => {},
  store: {
    destinationIndex: -1,
    sourceIndex: -1,
  },
});
