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
  files: SysFile[];
  directories: Directory[];
}

interface SysFile {
  name: string;
  content: JSX.Element;
}

interface FileSystemStructure {
  directory: Directory;
}
