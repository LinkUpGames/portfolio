import { clampNumber } from "@/helpers/functions";
import { ReactNode, useCallback, useEffect, useRef, useState } from "react";

interface Props {
  children: ReactNode;
}

/**
 * The window border that is used for every component used
 */
const WindowBorder = ({ children }: Props) => {
  // CONSTANTS
  const MAXPOS: Position[] = [
    { x: 0, y: 20 },
    {
      x: window.innerWidth - window.innerWidth * 0.2,
      y: window.innerHeight - window.innerHeight * 0.2,
    },
  ];

  // REFS
  const ref = useRef<HTMLDivElement | null>(null);

  // STATES
  // The position of the window relative to the browser
  const [pos, setPos] = useState<Position>({
    x: 0,
    y: 0,
  });

  // CALLBACKS
  /**
   * Control the position of the div based on the mouse
   */
  const onMouseDown = useCallback(
    (event: any) => {
      const element = ref.current;

      const onMouseMove = (event: MouseEvent) => {
        pos.x += event.movementX;
        pos.y += event.movementY;

        pos.x = clampNumber(pos.x, MAXPOS[0].x, MAXPOS[1].x);
        pos.y = clampNumber(pos.y, MAXPOS[0].y, MAXPOS[1].y);

        if (element && window.innerWidth > 768) {
          element.style.transform = `translate(${pos.x}px, ${pos.y}px)`;
          element.style.zIndex = "9999";
        }

        setPos(pos);
      };

      const onMouseUp = () => {
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseup", onMouseUp);

        if (element) {
          element.style.zIndex = "0";
        }
      };

      event.preventDefault();

      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", onMouseUp);
    },
    [pos, setPos, ref],
  );

  /**
   * Check for a window resizej
   */
  useEffect(() => {
    const handleResize = () => {
      const element = ref.current;
      if (element) {
        setPos({ x: 0, y: 0 });
        element.style.transform = `translate(${0}px, ${0}px)`;
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // FUNCTIONS
  return (
    <div
      ref={ref}
      onMouseDown={(e) => onMouseDown(e)}
      className={`relative md:absolute md:max-w-52 md:min-w-48 w-full md:w-fit max-h-72 min-h-48 bg-white`}
    >
      {children}
    </div>
  );
};

export default WindowBorder;
