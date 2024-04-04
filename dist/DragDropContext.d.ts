/// <reference types="react" />
import { ReducerState } from "./context";
interface Props {
    children: React.ReactNode;
    onDragEnd: (result: ReducerState) => void;
}
declare function DragDropContext({ children, onDragEnd }: Props): import("react/jsx-runtime").JSX.Element;
export default DragDropContext;
//# sourceMappingURL=DragDropContext.d.ts.map