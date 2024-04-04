import { useState } from "react";
import DragDropContext from "./DragDropContext";
import Draggable from "./Draggable";

function reorder<T>(
  list: T[],
  sourceIndex: number,
  destinationIndex: number
): T[] {
  const targetItem = list[sourceIndex];
  const resArr = list.map((target, i) => (i === sourceIndex ? null : target));
  resArr.splice(destinationIndex, 0, targetItem);
  return resArr.flatMap((target) => (target !== null ? [target] : []));
}

function App() {
  const [items, setItems] = useState([
    { id: "id_a", name: "item1" },
    { id: "id_b", name: "item2" },
    { id: "id_c", name: "item3" },
  ]);

  return (
    <DragDropContext
      onDragEnd={(result) => {
        const newOrder = reorder(
          items,
          result.sourceIndex,
          result.destinationIndex
        );
        setItems(newOrder);
      }}
    >
      <ul>
        {items.map((item, index) => (
          <Draggable key={item.id} draggableId={item.id} index={index}>
            {(provided) => (
              <li className={item.id} {...provided.draggableProps}>
                {item.name}
              </li>
            )}
          </Draggable>
        ))}
      </ul>
    </DragDropContext>
  );
}

export default App;
