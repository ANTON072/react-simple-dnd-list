/// <reference types="react" />
export interface ReducerState {
    destinationIndex: number;
    sourceIndex: number;
}
export type ActionType = {
    type: "SET_SOURCE_INDEX";
    payload: ReducerState["sourceIndex"];
} | {
    type: "SET_DESTINATION_INDEX";
    payload: ReducerState["destinationIndex"];
};
export interface AppContextValue {
    $refs: React.MutableRefObject<Map<string, HTMLElement>>;
    dispatch: React.Dispatch<ActionType>;
    store: ReducerState;
    onDragEnd: () => void;
}
export declare const AppContext: import("react").Context<AppContextValue>;
//# sourceMappingURL=context.d.ts.map