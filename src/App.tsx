import { useRef, createContext, useContext, useReducer } from "react";

interface DropResult {
  source: number;
  destination: number;
}

interface DropAction {
  type: "setSource" | "setDestination";
  payload: number;
}

interface AppContextValue {
  $refs: React.MutableRefObject<Map<string, HTMLElement>>;
  dispatch: React.Dispatch<DropAction>;
  onDragEnd: () => void;
}

const AppContext = createContext<AppContextValue | null>(null);

const items = [
  { id: 1, name: "item1" },
  { id: 2, name: "item2" },
  { id: 3, name: "item3" },
];

interface DraggableProps {
  draggable: boolean;
  onDragStart: (event: React.DragEvent) => void;
  onDragEnter: (event: React.DragEvent) => void;
  onDragOver: (event: React.DragEvent) => void;
  onDragLeave: (event: React.DragEvent) => void;
  onDragEnd: (event: React.DragEvent) => void;
  onDrop: (event: React.DragEvent) => void;
}

type Provided = {
  draggableProps: DraggableProps;
};

interface DraggableComponentProps {
  children: (provided: Provided) => JSX.Element;
  index: number;
}

interface DragDropContextComponentProps {
  onDragEnd: (result: DropResult) => void;
  children: React.ReactNode;
}

function reducer(state: DropResult, action: DropAction) {
  switch (action.type) {
    case "setSource":
      return { ...state, source: action.payload };
    case "setDestination":
      return { ...state, destination: action.payload };
    default:
      return state;
  }
}

function DragDropContext({
  onDragEnd,
  children,
}: DragDropContextComponentProps) {
  const $refs = useRef<AppContextValue["$refs"]["current"]>(new Map());

  const [state, dispatch] = useReducer(reducer, {
    source: -1,
    destination: -1,
  });

  const handleDragEnd = () => {
    if (state.source !== -1 && state.destination !== -1) {
      onDragEnd(state);
    }
  };

  return (
    <AppContext.Provider
      value={{
        $refs,
        dispatch,
        onDragEnd: handleDragEnd,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

function Draggable({ children, index }: DraggableComponentProps) {
  const context = useContext(AppContext);

  const draggableProps = {
    draggable: true,
    onDragStart(event: React.DragEvent) {
      event.dataTransfer.dropEffect = "move";
      event.dataTransfer.effectAllowed = "move";
      context?.dispatch({ type: "setSource", payload: index });
    },
    onDragEnter(event: React.DragEvent) {
      event.preventDefault();
    },
    // 通過している要素のイベントが発火する
    onDragOver(event: React.DragEvent) {
      event.preventDefault();
      const elm = context?.$refs.current.get(String(index));
      if (!elm) return;
      // カーソルが当たっている要素の相対位置情報を取得
      const rect = elm.getBoundingClientRect();
      // 要素内でのカーソル位置
      const posY = event.clientY - rect.top;
      // 要素の縦幅に対しての割合
      const ratioY = Math.min(1, Math.max(0, posY / rect.height));
      const destinationIndex = index + Math.round(ratioY);
      context?.dispatch({ type: "setDestination", payload: destinationIndex });
    },
    onDragLeave(event: React.DragEvent) {
      event.preventDefault();
    },
    onDragEnd() {
      context?.onDragEnd();
    },
    onDrop(event: React.DragEvent) {
      event.preventDefault();
    },
    ref(elm: HTMLElement) {
      if (elm) {
        context?.$refs.current.set(String(index), elm);
      } else {
        context?.$refs.current.delete(String(index));
      }
    },
  };

  return children({
    draggableProps,
  });
}

function App() {
  return (
    <DragDropContext
      onDragEnd={(result) => {
        console.log("result", result);
      }}
    >
      <ul>
        {items.map((item, index) => (
          <Draggable key={item.id} index={index}>
            {(provided) => <li {...provided.draggableProps}>{item.name}</li>}
          </Draggable>
        ))}
      </ul>
    </DragDropContext>
  );
}

export default App;
