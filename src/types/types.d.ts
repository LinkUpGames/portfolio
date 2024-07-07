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

interface Experience {
  company: string;
  job: string;
  time: string;
  img: string;
  description: string;
}

interface Directory {
  name: string;
  files: JSX.Element[];
  directories: Directory[];
}

interface File {
  name: string;
  experience: Experience;
}

interface FileSystemStructure {
  directory: Directory;
}
