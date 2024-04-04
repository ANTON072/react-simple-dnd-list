/* eslint-disable @typescript-eslint/no-unused-vars */
import { useReducer, useRef } from "react";
import {
  ActionType,
  AppContext,
  AppContextValue,
  ReducerState,
} from "./context";

interface Props {
  children: React.ReactNode;
  onDragEnd: (result: ReducerState) => void;
}

function reducer(state: ReducerState, action: ActionType) {
  switch (action.type) {
    case "SET_DESTINATION_INDEX":
      return { ...state, destinationIndex: action.payload };
    case "SET_SOURCE_INDEX":
      return { ...state, sourceIndex: action.payload };
    default:
      return state;
  }
}

function DragDropContext({ children, onDragEnd }: Props) {
  const $refs = useRef<AppContextValue["$refs"]["current"]>(new Map());

  const [store, dispatch] = useReducer(reducer, {
    destinationIndex: -1,
    sourceIndex: -1,
  });

  const handleDragEnd = () => {
    onDragEnd({
      destinationIndex: store.destinationIndex,
      sourceIndex: store.sourceIndex,
    });
  };

  return (
    <AppContext.Provider
      value={{
        $refs,
        dispatch,
        onDragEnd: handleDragEnd,
        store,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default DragDropContext;
