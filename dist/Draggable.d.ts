/// <reference types="react" />
interface DraggableProps {
    draggable: boolean;
    ref: (elm: HTMLElement | null) => void;
    onDragStart: (event: React.DragEvent) => void;
    onDragEnter: (event: React.DragEvent) => void;
    onDragOver: (event: React.DragEvent) => void;
    onDragLeave: (event: React.DragEvent) => void;
    onDragEnd: (event: React.DragEvent) => void;
    onDrop: (event: React.DragEvent) => void;
}
interface Provided {
    draggableProps: DraggableProps;
}
interface Props {
    draggableId: string;
    index: number;
    children: (provided: Provided) => JSX.Element;
}
declare function Draggable({ draggableId, index, children }: Props): import("react/jsx-runtime").JSX.Element;
export default Draggable;
//# sourceMappingURL=Draggable.d.ts.map