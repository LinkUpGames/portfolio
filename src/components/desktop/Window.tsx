import {
  DragEvent,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

interface Props {
  children: ReactNode;
}

/**
 * The window border that is used for every component used
 */
const WindowBorder = ({ children }: Props) => {
  // REFS
  const ref = useRef<HTMLDivElement | null>(null);

  // STATES
  // The position of the window relative to the browser
  const [pos, setPos] = useState<Position>({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });

  // CALLBACKS
  /**
   * Control the position of the div based on the mouse
   */
  const onMouseDown = useCallback(
    (event: any) => {
      const onMouseMove = (event: MouseEvent) => {
        pos.x += event.movementX;
        pos.y += event.movementY;

        const element = ref.current;

        if (element) {
          element.style.transform = `translate(${pos.x}px, ${pos.y}px)`;
        }

        setPos(pos);
      };

      const onMouseUp = () => {
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseup", onMouseUp);
      };

      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", onMouseUp);
    },
    [pos, setPos, ref],
  );

  // FUNCTIONS
  return (
    <div
      ref={ref}
      onMouseDown={onMouseDown}
      className="absolute max-w-52 min-w-48 w-fit max-h-72 min-h-48 bg-white"
    >
      {children}
    </div>
  );
};

export default WindowBorder;
