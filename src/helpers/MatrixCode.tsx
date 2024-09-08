import { useEffect, useRef, useState } from "react";

/**
 * Implementation of the matrix code on the background based on a certain number of characters and symbols
 *
 * Help from: https://codepen.io/wefiy/pen/WPpEwo
 */
const MatrixCode = () => {
  const ref = useRef<HTMLCanvasElement>(null);
  const matrix =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}".split(
      "",
    ); // The actual letters to throw down on the background
  const fontSize = 18; // FIXME: Make sure that the actual size changes depending on the size of the document
  const backgroundColor = "rgba(0, 0, 0, 0.04)";
  const textColor = "#484D6D"; //#eb5959

  // STATES
  const [canvas, setCanvas] = useState<HTMLCanvasElement | null>(null); // The canvas to draw
  const [board, setBoard] = useState<CanvasRenderingContext2D | null>(null); // The board to start manipulating the canvas board
  const [drops, setDrops] = useState<number[]>([]); // The array in which the actual character in printed in

  // FUNCTIONS
  /**
   * Draw the characters accross the board that spans the whole width of the screen
   *
   * @param board The board to start painting in
   * @param canvas The canvas in which we are generating the actual effect
   */
  const draw = (board: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
    board.fillStyle = backgroundColor;
    board.fillRect(0, 0, canvas.width, canvas.height);

    board.fillStyle = textColor; // Color of the text that goes down
    board.font = `${fontSize}px Chicago`;

    // Loop over the drops
    for (let i = 0; i < drops.length; i++) {
      const text = matrix[Math.floor(Math.random() * matrix.length)];
      board.fillText(text, i * fontSize, drops[i] * fontSize);

      if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }

      drops[i]++;
    }
  };

  // EFFECTS
  /**
   * Update the values we need for the canvas
   */
  useEffect(() => {
    if (ref.current) {
      const canvas = ref.current;
      const ratio = window.devicePixelRatio;
      canvas.width = window.innerWidth * ratio;
      canvas.height = window.innerHeight * ratio;

      setCanvas(canvas);
      setBoard(canvas.getContext("2d"));

      const columns = canvas.width / fontSize;

      const fillDrops: number[] = [];

      for (let x = 0; x < columns; x++) {
        fillDrops[x] = 1;
      }

      setDrops(fillDrops);
    }
  }, [ref]);

  /**
   * Start the actual drawing after the board has loaded
   */
  useEffect(() => {
    let unsubscribe: NodeJS.Timeout | undefined = undefined;

    if (board && canvas) {
      unsubscribe = setInterval(() => draw(board, canvas), 35);
    }

    return () => {
      if (unsubscribe) {
        clearInterval(unsubscribe);
      }
    };
  }, [board, canvas]);

  return (
    <canvas
      ref={ref}
      id="matrix"
      className="absolute bg-dark w-full h-full top-0 left-0"
    ></canvas>
  );
};

export default MatrixCode;
