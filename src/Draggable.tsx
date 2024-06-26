import { useContext } from "react";
import { AppContext } from "./context";

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

function Draggable({ draggableId, index, children }: Props) {
  const context = useContext(AppContext);

  const draggableProps: DraggableProps = {
    draggable: true,
    onDragStart(event: React.DragEvent) {
      event.dataTransfer.dropEffect = "move";
      event.dataTransfer.effectAllowed = "move";
      context.dispatch({ type: "SET_SOURCE_INDEX", payload: index });
    },
    onDragEnter(event: React.DragEvent) {
      event.preventDefault();
    },
    onDragOver(event: React.DragEvent) {
      event.preventDefault();
      const targetElm = context?.$refs.current.get(draggableId);
      if (!targetElm) return;

      const rect = targetElm.getBoundingClientRect();
      const posY = event.clientY - rect.top;
      const ratioY = Math.min(1, Math.max(0, posY / rect.height));
      const destinationIndex = index + Math.round(ratioY);
      context.dispatch({
        type: "SET_DESTINATION_INDEX",
        payload: destinationIndex,
      });
    },
    onDragLeave(event: React.DragEvent) {
      event.preventDefault();
    },
    onDragEnd(event: React.DragEvent) {
      event.preventDefault();
      context.onDragEnd();
      // 初期化
      context.dispatch({ type: "SET_SOURCE_INDEX", payload: -1 });
      context.dispatch({ type: "SET_DESTINATION_INDEX", payload: -1 });
    },
    onDrop(event: React.DragEvent) {
      event.preventDefault();
    },
    ref(elm: HTMLElement | null) {
      if (elm) {
        context?.$refs.current.set(draggableId, elm);
      } else {
        context?.$refs.current.delete(draggableId);
      }
    },
  };

  return (
    <>
      {children({
        draggableProps,
      })}
    </>
  );
}

export default Draggable;
