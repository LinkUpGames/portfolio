import { clampNumber } from "@/helpers/functions";
import { ReactNode, useCallback, useEffect, useRef, useState } from "react";

interface Props {
  title: string;
  children: ReactNode;
  className?: string;
  windowClassName?: string;
}

/**
 * The window border that is used for every component used
 */
const WindowBorder = ({
  children,
  title = "",
  className = "",
  windowClassName = "",
}: Props) => {
  // CONSTANTS
  const MAXPOS: Position[] = [
    { x: 0, y: 20 },
    {
      x: window.innerWidth - window.innerWidth * 0.25,
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
      if (element && (pos.x !== 0 || pos.y !== 0)) {
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
      // onMouseDown={(e) => onMouseDown(e)}
      className={`relative flex flex-col md:absolute md:max-w-[90%] md:min-w-72 w-full max-h-[90%] md:max-h-[85%] min-h-[30%] bg-white border-4 border-black rounded-md ${windowClassName}`}
    >
      <div className="w-full gap-2 h-fit mx-auto flex justify-between items-center border-b-black border-b-2 py-2 px-3">
        <div className="border-t-2 h-1/6 border-red border-b-2 bg-red w-full" />
        <h2 className="text-2xl md:text-4xl text-black"> {title}</h2>
        <div className="border-t-2 h-1/6 border-red border-b-2 bg-red w-full" />
      </div>

      <div
        className={`py-4 px-4 w-full flex-grow overflow-y-auto break-words ${className}`}
      >
        {children}
      </div>
    </div>
  );
};

export default WindowBorder;
