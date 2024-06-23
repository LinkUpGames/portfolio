interface Option {
  name: string;
  component?: JSX.Element;
}

interface Position {
  x: number;
  y: number;
}

interface MenuText {
  home: {
    title: string;
    title_card: string;
    introduction: string;
  };
}

interface AppIconProps {
  element: Option;
  mouseX: MotionValue;
}
